import TemplateNav from './templates/components/template-nav'
import TemplateTags from './templates/components/template-tags'
import TemplatePosts from './templates/components/template-posts'
import TemplateRelatedPosts from './templates/components/template-related-posts'
import { getScrollTop, getRandoms } from './utils'
import './styles'

export default class Tumblr {
	constructor (options) {
		const userOptions = options || {}
		const defaultOptions = {
			host: '',
			keyAPI: '',
			limitData: 250,
			cache: false,
			cacheMethod: 'sessionStorage',
			element: null,
			nearBottom: 350,
			elementPerPage: 20,
			templates: {}
		}

		// Merge default options with user options
		this.options = Object.assign(defaultOptions, userOptions)

		// No configurables params
		this.browserStorageKey = 'TumblrJsonData'
		this.infiniteScroll = true
		this.endPage = false
		this.isLoading = false
		this.jsonComplete = false
		this.currentPage = 1
		this.nbPostPerRequest = 50
		this.datas = {}
		this.types = ['audio', 'chat', 'link', 'photo', 'quote', 'text', 'video']

		this.onScroll = this.onScroll.bind(this)
		this.onHashChanged = this.onHashChanged.bind(this)
	}

	init = async () => {
		// Get JSON and push it in cache if option is active and if it's possible
		this.datas = await this.getAllDatas()

		if (this.datas.posts.length === 0) {
			return false
		}
		this.jsonComplete = true
		this.datas.tags = await this.getAllTags()
		this.totalPages = Math.ceil(this.datas.totalPosts / this.options.elementPerPage)

		this.addEvents()
		this.templates = await this.getTemplates()

		// Get current route
		this.currentRoute = this.getRoute()

		this.onHashChanged()

		return this.datas
	}

	addEvents () {
		window.addEventListener('scroll', this.onScroll, false)
		window.addEventListener('hashchange', this.onHashChanged, false)
	}

	onHashChanged = async e => {
		const currentTag = this.getHashTag()
		const currentPostId = this.getHashPostId()
		const pageType = this.getPageType()
		let posts

		if (pageType === 'tagged' && currentTag && this.isValidHash(currentTag)) {
			posts = await this.getDatasForTaggedPage(currentTag)
			this.buildPage({ posts })
		} else if (pageType === 'post' && currentPostId) {
			posts = await this.getDatasForPostPage(currentPostId)
			if (posts.length > 1) {
				this.setRoute('')
				return
			}
			const relatedPosts = this.getRelatedPosts({
				postId: currentPostId,
				tags: posts[0].tags,
				limit: 3
			})
			this.buildPage({
				posts,
				relatedPosts
			})
		} else {
			posts = await this.getDatasForHomePage()
			this.buildPage({ posts })
		}

		// Reset class properties on page changes
		this.endPage = false
		this.currentPage = 1
	}

	onScroll = async e => {
		if (
			!this.isLoading &&
			this.infiniteScroll &&
			!this.endPage &&
			this.getPageType() === 'home'
		) {
			if (
				getScrollTop() >=
				document.body.clientHeight - window.innerHeight - this.options.nearBottom
			) {
				this.isLoading = true
				if (this.currentPage >= this.totalPages) {
					this.endPage = true
				} else {
					await this.loadNewPage()
					this.currentPage++
				}
				this.isLoading = false
			}
		}
	}

	buildPage ({ posts, relatedPosts = [] }) {
		const displayTags = this.getPageType() === 'home'

		/* prettier-ignore */
		this.options.element.innerHTML = `
			${TemplateNav()}
			${displayTags ? TemplateTags(this.datas.tags) : ''}
			<div class="posts">
				${TemplatePosts({
			posts: posts,
			templates: this.templates
		})}
			</div>
			${relatedPosts.length
				? TemplateRelatedPosts({
					posts: relatedPosts,
					templates: this.templates
				})
			: ''}
		`
	}

	loadNewPage = async datas => {
		this.options.element.querySelector('.posts').insertAdjacentHTML(
			'beforeend',
			TemplatePosts({
				posts: await this.getPostsByPageNumber(this.currentPage + 1),
				templates: this.templates
			})
		)
	}

	/**
	 * Set the route
	 *
	 * @returns {String} route New value for the route
	 */
	setRoute (route) {
		window.location.hash = route
	}

	requestAPI (url) {
		return fetch(url).then(response => response.json())
	}

	isValidHash (tag) {
		return this.datas.tags.find(item => item === tag)
	}

	isValidResponse (datas) {
		return datas.meta.status === 200
	}

	extractDatasFromLocalDatas (range) {
		return this.datas.posts.slice(range.start, range.end + 1)
	}

	getTemplates = async () => {
		const templates = {}

		const typeAvailable = this.types.filter(type =>
			this.hasProperty(this.options.templates, type)
		)

		typeAvailable.forEach(type => {
			templates[type] = this.options.templates[type]
		})

		const typeUnavailable = this.types.filter(
			type => !this.hasProperty(this.options.templates, type)
		)

		const requests = typeUnavailable.map(type => import('./templates/types/template-' + type))

		const responses = await Promise.all(requests)
		responses.forEach((response, index) => {
			templates[typeUnavailable[index]] = response.default
		})

		return templates
	}

	getAPIUrl ({
		id = false,
		offset = 0,
		limit = this.options.limitData < this.nbPostPerRequest
			? this.options.limitData
			: this.nbPostPerRequest,
		tag = false
	} = {}) {
		return `//api.tumblr.com/v2/blog/${this.options.host}/posts/?api_key=${
			this.options.keyAPI
		}&limit=${limit}&notes_info=false&offset=${offset}${tag ? `&tag=${tag}` : ''}${
			id ? `&id=${id}` : ''
		}`
	}

	// Get the json and store it in cache if possible
	getAllDatas = async e => {
		let datas
		// If cache is true
		if (this.options.cache) {
			// Try to get JSON in cache
			var getDataFromCache = window[this.options.cacheMethod].getItem(this.browserStorageKey)

			// If doesn't exist, get the JSON with limit (this.options.limitData)
			if (getDataFromCache === null) {
				datas = await this.getDataFromAPI()

				window[this.options.cacheMethod].setItem(
					this.browserStorageKey,
					JSON.stringify(datas)
				)
			} else {
				// If exist in web storage, get it
				datas = JSON.parse(window[this.options.cacheMethod].getItem(this.browserStorageKey))
			}
		} else {
			// If cache is false or browser doesn't support web storage
			datas = await this.getDataFromAPI()

			// Remove data in web storage if already exist
			window[this.options.cacheMethod].removeItem(this.browserStorageKey)
		}

		return datas
	}

	// Get all the json with a limit
	getDataFromAPI = async () => {
		const datasFirstRequest = await this.requestAPI(this.getAPIUrl())

		if (this.isValidResponse(datasFirstRequest)) {
			const totalPosts = datasFirstRequest.response.total_posts
			const nbLoop = this.getNumberOfRequest(totalPosts)
			let posts = datasFirstRequest.response.posts

			if (datasFirstRequest.response.posts.length && nbLoop) {
				const requests = []

				// Else do multiple loop to get data in JSON (limit this.options.limitData)
				for (var i = 0; i < nbLoop; i++) {
					requests.push(
						this.requestAPI(
							this.getAPIUrl({
								offset: this.nbPostPerRequest + this.nbPostPerRequest * i
							})
						)
					)
				}

				await Promise.all(requests).then(responses => {
					responses.forEach(response => {
						posts = posts.concat(response.response.posts)
					})
				})
			}
			return { totalPosts, posts }
		} else {
			return { totalPosts: 0, posts: [] }
		}
	}

	getNumberOfRequest (totalPosts) {
		return totalPosts <= this.options.limitData
			? Math.ceil((totalPosts - this.nbPostPerRequest) / this.nbPostPerRequest)
			: Math.ceil((this.options.limitData - this.nbPostPerRequest) / this.nbPostPerRequest)
	}

	getDatasForHomePage () {
		const maxPosts =
			this.datas.totalPosts < this.options.elementPerPage
				? this.datas.totalPosts
				: this.options.elementPerPage

		return this.datas.posts.slice(0, maxPosts)
	}

	getDatasForTaggedPage = async tag => {
		const datas = await this.requestAPI(
			this.getAPIUrl({
				tag: tag
			})
		)

		return datas && datas.response ? datas.response.posts : []
	}

	getDatasForPostPage = async id => {
		const datas = await this.requestAPI(
			this.getAPIUrl({
				id: id
			})
		)

		return datas && datas.response ? datas.response.posts : []
	}

	// GetpostsBypageNumber, use by infinite scroll
	getPostsByPageNumber = async pageNumber => {
		const range = this.getRange(pageNumber)
		const datas = this.extractDatasFromLocalDatas(range)

		if (datas.length) {
			return datas
		} else {
			const datas = await this.requestAPI(
				this.getAPIUrl({
					offset: range.start,
					limit: this.options.elementPerPage
				})
			)
			return datas.response.posts
		}
	}

	getPageType () {
		const hash = this.getRoute()

		if (hash.indexOf('/tagged/') !== -1) {
			return 'tagged'
		} else if (hash.indexOf('/post/') !== -1) {
			return 'post'
		} else {
			return 'home'
		}
	}

	getRange (pageNumber) {
		const previousPage = pageNumber > 1 ? pageNumber - 1 : pageNumber
		return {
			start: previousPage * this.options.elementPerPage,
			end: pageNumber * this.options.elementPerPage - 1
		}
	}

	getHashTag () {
		return this.getRoute().split('/tagged/')[1]
	}

	getHashPostId () {
		return this.getRoute().split('/post/')[1]
	}

	getRoute () {
		return window.location.hash.substr(1)
	}

	// Get a related posts
	getRelatedPosts ({ postId, limit = 3, tags = [], ignoreTags = [] }) {
		// Get all tags from current post without ignore tags
		const tagsSource = tags.filter(tag => !ignoreTags.includes(tag))

		// Get related posts
		const relatedPosts = this.datas.posts.filter(post =>
			post.tags.some(tag => tagsSource.includes(tag) && post.id_string !== postId)
		)

		// Get random keys
		const randomKeys = getRandoms(limit, 0, relatedPosts.length - 1) || []

		if (relatedPosts.length < limit) {
			return relatedPosts
		} else {
			// Extract random related posts
			return randomKeys.map(key => relatedPosts[key])
		}
	}

	// Get a sort tab of all tags
	getAllTags (e) {
		return this.jsonComplete
			? this.datas.posts
				.filter(post => post.tags.length)
				.flatMap(post => post.tags)
				.map(tag => tag.toLowerCase())
				.filter((elem, pos, arr) => {
					return arr.indexOf(elem) === pos
				})
				.sort()
			: []
	}

	hasProperty (element, attribute) {
		return Object.prototype.hasOwnProperty.call(element, attribute)
	}
}
