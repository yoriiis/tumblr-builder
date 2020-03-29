import TemplateText from './templates/template-text'
import TemplatePhoto from './templates/template-photo'
import TemplateQuote from './templates/template-quote'
import TemplateVideo from './templates/template-video'
import TemplateAudio from './templates/template-audio'
import TemplateChat from './templates/template-chat'
import TemplateLink from './templates/template-link'
import { getScrollTop, getRandoms } from './utils'
import './styles'

export default class Tumblr {
	constructor (options) {
		const userOptions = options || {}
		const defaultOptions = {
			host: '',
			useAPI: false,
			keyAPI: '',
			limitData: 250,
			cache: false,
			cacheMethod: 'sessionStorage',
			element: '',
			nearBottom: 350,
			elementPerPage: 20
		}

		// Merge default options with user options
		this.options = Object.assign(defaultOptions, userOptions)

		// No configurables params
		this.browserStorageKey = `${this.options.host.split('.')[0]}TumblrJsonData`
		this.infiniteScroll = true
		this.endPage = false
		this.isLoading = false
		this.jsonComplete = false
		this.currentPage = 1
		this.nbPostPerRequest = 50
		this.datas = {}

		this.onScroll = this.onScroll.bind(this)
		this.onHashChanged = this.onHashChanged.bind(this)
	}

	init = async () => {
		// Get JSON and push it in cache if option is active and if it's possible
		if (this.options.useAPI) {
			this.datas = await this.getAllDatas()
			this.jsonComplete = true
			this.datas.tags = await this.getAllTags()
			this.totalPages = Math.ceil(this.datas.totalPosts / this.options.elementPerPage)
		}
		console.log(this.datas)

		this.addEvents()

		// Get current route
		this.currentRoute = this.getRoute()

		// Init the router with the default route
		if (this.currentRoute !== '') {
			this.onHashChanged()
		} else {
			this.setRoute('')
		}

		this.buildPage(this.getDatasForHomePage())
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

	hashIsValid (tag) {
		return this.datas.tags.find(item => item === tag)
	}

	/**
	 * Set the route
	 *
	 * @returns {String} route New value for the route
	 */
	setRoute (route) {
		window.location.hash = route
	}

	addEvents () {
		window.addEventListener('scroll', this.onScroll, false)
		window.addEventListener('hashchange', this.onHashChanged, false)
	}

	onHashChanged = async e => {
		const currentTag = this.getHashTag()
		const currentPostId = this.getHashPostId()
		const pageType = this.getPageType()
		let datas

		if (pageType === 'tagged' && currentTag && this.hashIsValid(currentTag)) {
			console.log('goto tag => ', currentTag)
			datas = await this.getDatasForTaggedPage(currentTag)
		} else if (pageType === 'post' && currentPostId) {
			console.log('goto post => ', currentPostId)
			datas = await this.getDatasForPostPage(currentPostId)
			if (datas.length > 1) {
				console.log('goto redirect home')
				this.setRoute('')
				return
			}
		} else {
			console.log('goto home')
			datas = await this.getDatasForHomePage()
		}

		// Reset class properties on page changes
		this.endPage = false
		this.currentPage = 1

		this.buildPage(datas)
	}

	buildPage (datas) {
		/* prettier-ignore */
		this.options.element.innerHTML = `
			<a class="btn" href="#_" title="Home">Home</a>
			<div class="tags">
				<ul>
					${this.datas.tags.map(tag => `
						<li>
							<a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
						</li>
					`).join('')}
					<li></li>
				</ul>
			</div>
			<div class="posts">${this.getHTMLNewPosts(datas)}</div>
		`

		// ${window.location.protocol}//${this.options.host}/tagged/${tag}
	}

	getHTMLNewPosts (datas) {
		let html = ''
		datas.forEach(post => {
			html += this.getTemplateByType(post.type)(post)
		})

		return html
	}

	getTemplateByType (type) {
		if (type === 'text') {
			return TemplateText.bind(this)
		} else if (type === 'photo') {
			return TemplatePhoto.bind(this)
		} else if (type === 'quote') {
			return TemplateQuote.bind(this)
		} else if (type === 'video') {
			return TemplateVideo.bind(this)
		} else if (type === 'audio') {
			return TemplateAudio.bind(this)
		} else if (type === 'chat') {
			return TemplateChat.bind(this)
		} else if (type === 'link') {
			return TemplateLink.bind(this)
		}
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

	loadNewPage = async datas => {
		this.options.element
			.querySelector('.posts')
			.insertAdjacentHTML(
				'beforeend',
				this.getHTMLNewPosts(await this.getPostsByPageNumber(this.currentPage + 1))
			)
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

	requestAPI (url) {
		return fetch(url).then(response => response.json())
	}

	getNumberOfRequest (totalPosts) {
		return totalPosts <= this.options.limitData
			? Math.ceil((totalPosts - this.nbPostPerRequest) / this.nbPostPerRequest)
			: Math.ceil((this.options.limitData - this.nbPostPerRequest) / this.nbPostPerRequest)
	}

	// Get all the json with a limit
	getDataFromAPI = async () => {
		const datasFirstRequest = await this.requestAPI(this.getAPIUrl())
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

	extractDatasFromLocalDatas (range) {
		return this.datas.posts.slice(range.start, range.end + 1)
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
	getRelatedPosts (options) {
		var listPosts = []
		var listID = []
		var randomTagsArray = []
		var randomArray = []
		var currentID = 0
		var tags = []
		var posts = null

		var params = Object.assign(
			{
				limit: 3,
				ignoreTag: null
			},
			options
		)

		if (!this.options.useAPI) {
			console.log('Related post use API, please active useAPI in params.')
			return
		}

		// If current page is different of page post or json not complete, stop
		if (this.checkPage() !== 'post' || !this.jsonComplete) {
			console.log(
				'Related post can only be add on post page when _Tumblr.events.JSON_COMPLETE is published'
			)
			return
		}

		// Get tags of current post
		tags = this.getTagsPost()

		// If return null, idPost is unknown in the cache
		if (tags === null) {
			console.log('The current post (' + this.getIdPostPage() + ') has no tag')
			return
		}

		// If tag must be ignore
		if (params.ignoreTag != null && tags.length > 1) {
			for (let l = 0, lengthTagIgnore = tags.length; l < lengthTagIgnore; l++) {
				if (params.ignoreTag === tags[l]) {
					tags.splice(l, 1)
				}
			}
		}

		// Get current ID post page
		currentID = this.getIdPostPage()

		// Loop in all posts
		for (var i = 0, lengthPosts = this.data.posts.length; i < lengthPosts; i++) {
			posts = this.data.posts[i]

			// If post has tags
			if (typeof posts.tags !== 'undefined') {
				// Loop in tags of every post
				for (var j = 0, lengthTag = posts.tags.length; j < lengthTag; j++) {
					// Loop in tags of current post
					for (var k = 0, lengthCurrentTag = tags.length; k < lengthCurrentTag; k++) {
						if (
							posts.tags[j].toLowerCase() === tags[k].toLowerCase() &&
							posts.id !== currentID &&
							!listID.includes(posts.id)
						) {
							listPosts.push(posts)
							listID.push(posts.id)
						}
					}
				}
			}
		}

		// Zero tag return
		if (listPosts.length) {
			// Get an array of random unique number
			randomArray = getRandoms(params.limit, 0, parseInt(listPosts.length) - 1)

			// Return all tag
			if (listPosts.length < params.limit) {
				randomTagsArray.posts = listPosts
			} else {
				// Return random
				randomTagsArray.posts = []
				for (let l = 0, lengthRandom = randomArray.length; l < lengthRandom; l++) {
					randomTagsArray.posts.push(listPosts[randomArray[l]])
				}
			}

			return randomTagsArray
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

	// Get a list of tags
	getTagsPost (idPost) {
		if (!this.options.useAPI) {
			console.log('List of tags of posts use API, please active useAPI in params.')
			return
		}

		var listTags = []

		if (typeof idPost === 'undefined') idPost = this.getIdPostPage()

		for (var i = 0, lengthPost = this.data.posts.length; i < lengthPost; i++) {
			if (this.data.posts[i].id === idPost) {
				if (typeof this.data.posts[i].tags === 'undefined') return

				for (var j = 0, l = this.data.posts[i].tags.length; j < l; j++) {
					listTags.push(this.data.posts[i].tags[j].toLowerCase())
				}

				return listTags
			} else {
				if (i === lengthPost - 1) {
					console.log('Unknown idPost')
					return null
				}
			}
		}
	}

	// Get tag of tagged page
	getTagPage (e) {
		if (this.checkPage() === 'tagged') {
			var urlToCheck = ''

			if (window.location.hash === '') {
				urlToCheck = window.location.pathname
			} else {
				urlToCheck = window.location.hash
			}

			var pathName = urlToCheck.split('/')
			var tagComponent = pathName[pathName.length - 1]
			return decodeURIComponent(tagComponent.replace(/-/g, ' '))
		}
	}

	// Get id of post in post page
	getIdPostPage (e) {
		var currentPostUrl = window.location.href
		var currentIdPost = null

		if (this.checkPage() === 'post') {
			currentPostUrl.replace(/\/post\/([0-9]+)/g, (match, $1) => {
				currentIdPost = $1
			})
			return currentIdPost
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

	// Check page
	checkPage (e) {
		var urlToCheck = ''

		if (window.location.hash === '') {
			urlToCheck = window.location.pathname
		} else {
			urlToCheck = window.location.hash
		}

		if (urlToCheck.indexOf('tagged/') !== -1) {
			return 'tagged'
		} else if (urlToCheck.indexOf('post/') !== -1) {
			return 'post'
		} else if (urlToCheck === '/') {
			return 'home'
		}
	}
}
