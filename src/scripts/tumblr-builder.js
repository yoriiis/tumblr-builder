import { getScrollTop, getRandoms } from './utils'

import './styles'

/*!
 * TumblrBuilder v2.0.0
 * (c) 2020 Yoriiis
 * Released under the MIT License.
 */
export default class TumblrBuilder {
	/**
	 * @param {options}
	 */
	constructor (options) {
		const userOptions = options || {}
		const defaultOptions = {
			element: null,
			host: '',
			apiKey: '',
			limitData: 250,
			cache: false,
			cacheMethod: 'sessionStorage',
			nearBottom: 350,
			elementsPerPage: 20,
			templatesPages: {},
			templatesPosts: {}
		}

		// Merge default options with user options
		this.options = Object.assign(defaultOptions, userOptions)

		// No configurables params
		this.browserStorageKey = 'TumblrBuilderJsonData'
		this.endPage = false
		this.isLoading = false
		this.jsonComplete = false
		this.currentPage = 1
		this.nbPostPerRequest = 50
		this.datas = {}

		this.keysTemplatesPage = ['home', 'post', 'tagged']
		this.keysTemplatePosts = ['audio', 'chat', 'link', 'photo', 'quote', 'text', 'video']

		this.onScroll = this.onScroll.bind(this)
		this.hashChanged = this.hashChanged.bind(this)
	}

	/**
	 * Function to initialize the app
	 */
	init = async () => {
		// Get JSON and push it in cache if option is active and if it's possible
		this.datas = await this.getAllDatas()

		if (this.datas.posts.length === 0) {
			window[this.options.cacheMethod].removeItem('TumblrBuilderJsonData')
			return false
		}
		this.jsonComplete = true
		this.datas.tags = await this.getAllTags()
		this.totalPages = Math.ceil(this.datas.totalPosts / this.options.elementsPerPage)

		this.addEvents()
		this.templates = await this.getTemplates()

		// Get current route
		this.currentRoute = this.getRoute()

		this.hashChanged()

		return this.datas
	}

	/**
	 * Create event listeners
	 */
	addEvents () {
		window.addEventListener('scroll', this.onScroll, false)
		window.addEventListener('hashchange', this.hashChanged, false)
	}

	/**
	 * On hash changed event listener
	 *
	 * @param {Object} e Event listener datas
	 */
	hashChanged = async e => {
		const currentTag = this.getHashTagFromRoute()
		const currentPostId = this.getPostIdFromRoute()
		const pageType = this.getPageType()
		let posts

		if (pageType === 'tagged' && currentTag) {
			posts = await this.getDatasForTaggedPage(currentTag)
			this.buildPage(
				this.templates.pages.tagged({
					templates: this.templates.posts,
					posts
				})
			)
		} else if (pageType === 'post' && currentPostId) {
			posts = await this.getDatasForPostPage(currentPostId)
			// Back to home page if post page returns more than one article
			if (posts.length > 1) {
				this.setRoute('')
				return
			}
			const relatedPosts = this.getRelatedPosts({
				postId: currentPostId,
				tags: posts[0].tags,
				limit: 3
			})
			this.buildPage(
				this.templates.pages.post({
					templates: this.templates.posts,
					posts,
					relatedPosts
				})
			)
		} else {
			posts = await this.getDatasForHomePage()
			this.buildPage(
				this.templates.pages.home({
					templates: this.templates.posts,
					tags: this.datas.tags,
					posts
				})
			)
		}

		// Reset class properties on page changes
		this.endPage = false
		this.currentPage = 1
	}

	/**
	 * On scroll event listener
	 *
	 * @param {Object} e Event listener datas
	 */
	onScroll = async e => {
		const page = this.getPageType()
		if (!this.isLoading && !this.endPage && (page === 'home' || page === 'tagged')) {
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

	/**
	 * Build the page
	 *
	 * @param {Array} posts List of posts for the current page
	 * @param {Array} relatedPosts List of related posts if available
	 */
	buildPage (html) {
		this.options.element.innerHTML = html
	}

	/**
	 * Load new page on infinite scroll
	 * Get next posts from the API
	 * Inject new content after current posts on the [data-infinite-scroll] element
	 */
	loadNewPage = async () => {
		const posts = await this.getPostsByPageNumber(this.currentPage + 1)
		const infiniteScrollElement = this.options.element.querySelector('[data-infinite-scroll]')

		if (infiniteScrollElement !== null) {
			infiniteScrollElement.insertAdjacentHTML(
				'beforeend',
				`${posts.map(post => this.templates.posts[post.type](post)).join('')}`
			)
		}
	}

	/**
	 * Set the route
	 *
	 * @param {String} route New value for the route
	 */
	setRoute (route) {
		window.location.hash = route
	}

	/**
	 * Request datas from the API
	 *
	 * @param {String} url API url
	 *
	 * @returns {Promise<Object>} Promise results from the API
	 */
	requestAPI (url) {
		return fetch(url).then(response => response.json())
	}

	/**
	 * Check if the Response from the API is valid
	 *
	 * @param {Object} datas Response datas
	 *
	 * @returns {Boolean} Is a valid Response
	 */
	isValidResponse (datas) {
		return datas.meta.status === 200
	}

	/**
	 * Extract a range of posts from browser storage if available
	 *
	 * @param {Object} range Start and end index for the range
	 *
	 * @returns {Array} List of corresponding posts
	 */
	extractDatasFromLocalDatas (range) {
		return this.datas.posts.slice(range.start, range.end + 1)
	}

	/**
	 * Get templates from constructor options templatesPages and templatesPosts
	 * Else, dynamic import default template for each types
	 *
	 * @returns {Object} List of template functions by type
	 */
	getTemplates = async () => {
		return {
			pages: await this.getTemplatesByType({
				keys: this.keysTemplatesPage,
				path: './templates/pages/',
				custom: this.options.templatesPages
			}),
			posts: await this.getTemplatesByType({
				keys: this.keysTemplatePosts,
				path: './templates/posts/',
				custom: this.options.templatesPosts
			})
		}
	}

	/**
	 * Get templates between default and custom templates
	 * Priority to custom templates
	 *
	 * @param {Object}
	 * @param {String} keys Keys for template pages (home, tagged, post)
	 * @param {String} path Path to dynamic import default templates
	 * @param {String} custom Custom templates for the current type
	 *
	 * @returns {Object} List of templates for the current type (pages, posts)
	 */
	getTemplatesByType = async ({ keys, path, custom }) => {
		const templates = {}

		const customTemplates = keys.filter(name => this.hasProperty(custom, name))
		customTemplates.forEach(name => {
			templates[name] = custom[name]
		})
		const defaultTemplates = keys.filter(name => !this.hasProperty(custom, name))

		const requestsDefaultTemplates = defaultTemplates.map(name => import(path + name))

		const responses = await Promise.all(requestsDefaultTemplates)

		responses.forEach((response, index) => {
			templates[defaultTemplates[index]] = response.default
		})

		return templates
	}

	/**
	 * Build the Tumblr API url
	 *
	 * @param {Object}
	 * @param {String||Boolean} id Post id
	 * @param {Integer} offset Offset for the query
	 * @param {Integer} limit Limit of results for the query
	 * @param {String} tag Filter by a unique post tag
	 *
	 * @returns {String} API url for the request
	 */
	getAPIUrl ({
		id = false,
		offset = 0,
		limit = this.options.limitData < this.nbPostPerRequest
			? this.options.limitData
			: this.nbPostPerRequest,
		tag = false
	} = {}) {
		return `//api.tumblr.com/v2/blog/${this.options.host}/posts/?api_key=${
			this.options.apiKey
		}&limit=${limit}&notes_info=false&offset=${offset}${tag ? `&tag=${tag}` : ''}${
			id ? `&id=${id}` : ''
		}`
	}

	/**
	 * Get all datas from the API
	 * Store datas in browser storage is option is enabled
	 *
	 * @returns {Object} Datas from the API
	 */
	getAllDatas = async e => {
		let datas

		if (this.options.cache) {
			var getDataFromCache = window[this.options.cacheMethod].getItem(this.browserStorageKey)

			if (getDataFromCache === null) {
				datas = await this.getDataFromAPI()

				window[this.options.cacheMethod].setItem(
					this.browserStorageKey,
					JSON.stringify(datas)
				)
			} else {
				datas = JSON.parse(window[this.options.cacheMethod].getItem(this.browserStorageKey))
			}
		} else {
			datas = await this.getDataFromAPI()
			window[this.options.cacheMethod].removeItem(this.browserStorageKey)
		}

		return datas
	}

	/**
	 * Get datas from the API
	 *
	 * @returns {Object} Datas from the API
	 */
	getDataFromAPI = async () => {
		// Trigger the first request to get infos about totalPosts and calculate next requests
		const datasFirstRequest = await this.requestAPI(this.getAPIUrl())

		if (this.isValidResponse(datasFirstRequest)) {
			const totalPosts = datasFirstRequest.response.total_posts
			const nbLoop = this.getNumberOfRequiredRequests(totalPosts)
			let posts = datasFirstRequest.response.posts

			if (datasFirstRequest.response.posts.length && nbLoop) {
				const requests = []

				// Do multiple loop according to nbLoop and options.limitData
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
			// If the request failed, return empty results to prevent break the application
			return { totalPosts: 0, posts: [] }
		}
	}

	/**
	 * Get number of required requests to reach options.limitDatas
	 * without the first request datas
	 *
	 * @param {*} totalPosts Total of posts from the API
	 *
	 * @returns {Integer} Number of request to reach options.limitDatas
	 */
	getNumberOfRequiredRequests (totalPosts) {
		return totalPosts <= this.options.limitData
			? Math.ceil((totalPosts - this.nbPostPerRequest) / this.nbPostPerRequest)
			: Math.ceil((this.options.limitData - this.nbPostPerRequest) / this.nbPostPerRequest)
	}

	/**
	 * Get datas for the homepage (first page only)
	 * Datas are available in the class property
	 *
	 * @returns {Object} Posts datas for the homepage
	 */
	getDatasForHomePage () {
		const maxPosts =
			this.datas.totalPosts < this.options.elementsPerPage
				? this.datas.totalPosts
				: this.options.elementsPerPage

		return this.datas.posts.slice(0, maxPosts)
	}

	/**
	 * Get datas for the tagged page
	 * Request the API to get posts
	 *
	 * @param {String} tag Tag to filter posts
	 *
	 * @returns {Object} Posts datas for the tagged page filter by tag
	 */
	getDatasForTaggedPage = async tag => {
		const datas = await this.requestAPI(
			this.getAPIUrl({
				tag,
				limit: this.options.elementsPerPage
			})
		)

		return datas && datas.response ? datas.response.posts : []
	}

	/**
	 * Get datas for the post page
	 * Request the API to get posts
	 *
	 * @param {String} id Id of the current post
	 *
	 * @returns {Object} Posts datas for the post page filter by post id
	 */
	getDatasForPostPage = async id => {
		const datas = await this.requestAPI(
			this.getAPIUrl({
				id: id
			})
		)

		return datas && datas.response ? datas.response.posts : []
	}

	/**
	 * Get datas by page number, use by the infinite scroll
	 * Request the local datas in priority
	 * If no datas are available, request the API to get posts
	 *
	 * @param {Integer} pageNumber Page number
	 *
	 * @returns {Object} Posts datas for the homepage filter by page number
	 */
	getPostsByPageNumber = async pageNumber => {
		const range = this.getRange(pageNumber)
		const datas = this.extractDatasFromLocalDatas(range)

		// Only home page can used local datas, tagged page need to filter (request directly)
		if (datas.length && this.getPageType() === 'home') {
			return datas
		} else {
			const datas = await this.requestAPI(
				this.getAPIUrl({
					offset: range.start,
					limit: this.options.elementsPerPage,
					tag: this.getPageType() === 'tagged' ? this.getHashTagFromRoute() : false
				})
			)
			return datas.response.posts
		}
	}

	/**
	 * Get the type of the current page according to the hash
	 *
	 * @returns {String} Page type (tagged, post, home)
	 */
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

	/**
	 * Get range index (start, end) to extract posts from local datas
	 * according to the current page position and elements per page
	 *
	 * @param {Integer} pageNumber Pagz number
	 *
	 * @returns {Object} Start and end index for the range
	 */
	getRange (pageNumber) {
		const previousPage = pageNumber > 1 ? pageNumber - 1 : pageNumber
		return {
			start: previousPage * this.options.elementsPerPage,
			end: pageNumber * this.options.elementsPerPage - 1
		}
	}

	/**
	 * Get hashtag from the route
	 *
	 * @returns {String} Current tag
	 */
	getHashTagFromRoute () {
		return this.getRoute().split('/tagged/')[1]
	}

	/**
	 * Get post id from the route
	 *
	 * @returns {String} Current post id
	 */
	getPostIdFromRoute () {
		return this.getRoute().split('/post/')[1]
	}

	/**
	 * Get the current route (hash)
	 *
	 * @returns {String} Current hash
	 */
	getRoute () {
		return window.location.hash.substr(1)
	}

	/**
	 * Get related posts
	 * Research is executed is local datas collection only
	 *
	 * @param {Object}
	 * @param {String} postId Pot id
	 * @param {Integer} limit Limit of related posts results
	 * @param {Array} tags Tags list of the current post
	 * @param {Array} ignoreTags Ignore specific list of tags
	 *
	 * @returns {Array} List of related posts associated to the current post
	 */
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

	/**
	 * Get all tags from local datas
	 * Tags are sorted alphabetical
	 * Tags are search only from local datas according to options.limitData posts
	 *
	 * @returns {Array} List of tags
	 */
	getAllTags () {
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

	/**
	 * Custom hasOwnProperty to prevent security issue (ESLint no-prototype-builtins)
	 *
	 * @param {Object} objectSource Object source to search the key
	 * @param {String} key The key to search inside the object
	 *
	 * @returns {Boolean} Is the key present inside the object
	 */
	hasProperty (objectSource, key) {
		return Object.prototype.hasOwnProperty.call(objectSource, key)
	}
}
