import TemplateText from './templates/template-text'
import TemplatePhoto from './templates/template-photo'
import TemplateQuote from './templates/template-quote'
import TemplateVideo from './templates/template-video'
import TemplateAudio from './templates/template-audio'
import TemplateChat from './templates/template-chat'
import TemplateLink from './templates/template-link'

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
			elementPerPage: 20,
			totalPages: 1
		}

		// Merge default options with user options
		this.options = Object.assign(defaultOptions, userOptions)

		// No configurables params
		this.infiniteScroll = true
		this.endPage = false
		this.isLoading = false
		this.jsonComplete = false
		this.currentPage = 1
		this.nbPostPerRequest = 50

		this.handlers = {}

		this.onScroll = this.onScroll.bind(this)
	}

	init = async () => {
		// Get JSON and push it in cache if option is active and if it's possible
		if (this.options.useAPI) {
			const datas = await this.getAllDatas()

			this.datas = datas
			this.jsonComplete = true
		}
		console.log(this.datas)

		this.addEvents()
		this.buildDOM()
	}

	addEvents () {
		window.addEventListener('scroll', this.onScroll, false)
	}

	buildDOM () {
		let html = ''

		const maxIteration =
			this.datas.totalPosts < this.options.elementPerPage
				? this.datas.totalPosts
				: this.options.elementPerPage

		for (let i = 0; i < maxIteration; i++) {
			const post = this.datas.posts[i]
			const type = post.type
			const template = this.getTemplateByType(type)

			html += template(post)
		}

		this.options.element.insertAdjacentHTML('beforeend', html)
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

	onScroll (e) {
		if (
			!this.isLoading &&
			this.infiniteScroll &&
			!this.endPage &&
			(this.checkPage() === 'home' || this.checkPage() === 'tagged')
		) {
			if (
				this.getScrollTop() >=
				document.body.clientHeight - window.innerHeight - this.options.nearBottom
			) {
				this.isLoading = true

				if (this.currentPage >= this.options.totalPages) {
					this.isLoading = false
					this.endPage = true
				} else {
					// Get post of next page (home and tagged page)
					const datas = this.getPostOfPage(
						this.currentPage + 1,
						this.checkPage() === 'tagged'
					)
					this.onReceivedNewPosts(datas)
				}
			}
		}
	}

	onReceivedNewPosts (datas) {
		this.currentPage++

		this.options.element.insertAdjacentHTML('beforeend', datas)

		// Reload new like button after append
		Tumblr.LikeButton.get_status_by_page(this.currentPage)

		this.isLoading = false
	}

	// Manage events
	on (eventName, method) {
		var self = this
		this.handlers[method] = function () {
			method.call(self)
		}
		document.on(eventName, this.handlers[method])
	}

	off (eventName, method) {
		document.off(eventName, this.handlers[method])
	}

	trigger (eventName, datas) {
		document.trigger(eventName, typeof datas !== 'undefined' ? datas : [])
	}

	// Get the json and store it in cache if possible
	getAllDatas = async e => {
		let datas
		// If cache is true
		if (this.options.cache) {
			// Try to get JSON in cache
			var getDataFromCache = window[this.options.cacheMethod].getItem('TUMBLR_JSON_DATA')

			// If doesn't exist, get the JSON with limit (this.options.limitData)
			if (getDataFromCache === null) {
				datas = await this.getDataFromAPI()

				window[this.options.cacheMethod].setItem('TUMBLR_JSON_DATA', JSON.stringify(datas))
			} else {
				// If exist in web storage, get it
				datas = JSON.parse(window[this.options.cacheMethod].getItem('TUMBLR_JSON_DATA'))
			}
		} else {
			// If cache is false or browser doesn't support web storage
			datas = await this.getDataFromAPI()

			// Remove data in web storage if already exist
			window[this.options.cacheMethod].removeItem('TUMBLR_JSON_DATA')
		}

		return datas
	}

	getAPIUrl () {
		return `//api.tumblr.com/v2/blog/${this.options.host}/posts/?api_key=${this.options.keyAPI}&limit=${this.nbPostPerRequest}&notes_info=false`
	}

	requestAPI (url) {
		return fetch(url).then(response => response.json())
	}

	getNumberOfRequest (totalPost) {
		return totalPost <= this.options.limitData
			? Math.ceil((totalPost - this.nbPostPerRequest) / this.nbPostPerRequest)
			: Math.ceil((this.options.limitData - this.nbPostPerRequest) / this.nbPostPerRequest)
	}

	// Get all the json with a limit
	getDataFromAPI = async () => {
		const datasFirstRequest = await this.requestAPI(this.getAPIUrl())
		const totalPosts = datasFirstRequest.response.total_posts
		const nbLoop = this.getNumberOfRequest(totalPosts)
		let posts = datasFirstRequest.response.posts

		if (datasFirstRequest.response.posts.length && nbLoop) {
			const apiUrls = []

			// Else do multiple loop to get data in JSON (limit this.options.limitData)
			for (var i = 0; i < nbLoop; i++) {
				apiUrls.push(
					`${this.getAPIUrl()}&offset=${this.nbPostPerRequest +
						this.nbPostPerRequest * i}`
				)
			}

			const requests = []
			apiUrls.forEach(url => requests.push(fetch(url).then(response => response.json())))
			await Promise.all(requests).then(responses => {
				responses.forEach(response => {
					posts = posts.concat(response.response.posts)
				})
			})
		}

		return { totalPosts, posts }
	}

	// Getpostofpage, use by infinite scroll
	getPostOfPage (numPage, taggedPage) {
		var url = null

		if (numPage > this.options.totalPages) {
			return false
		} else {
			// If tagged page, change url of ajax request
			if (taggedPage) {
				url = `${this.options.host}/tagged/${this.getTagPage()}/page/${numPage}`
			} else {
				url = `${this.options.host}/page/${numPage}`
			}

			return fetch(url)
				.then(response => response.json())
				.then(response => response)
		}
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
			randomArray = this.getRandoms(params.limit, 0, parseInt(listPosts.length) - 1)

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
		if (!this.options.useAPI) {
			console.log('List of all tags use API, please active useAPI in params.')
			return
		}

		// If JSON isn't complete, stop
		if (!this.jsonComplete) {
			console.log(
				'The function getAllTags() use JSON data, please attach to _Tumblr.events.JSON_COMPLETE event to execute your code'
			)
			return
		}

		var data = this.data
		var listTag = []

		for (var k = 0, lengthPost = data.posts.length; k < lengthPost; k++) {
			if (typeof data.posts[k].tags !== 'undefined') {
				for (var j = 0, lengthtag = data.posts[k].tags.length; j < lengthtag; j++) {
					if (!listTag.includes(data.posts[k].tags[j].toLowerCase())) {
						listTag.push(data.posts[k].tags[j].toLowerCase())
					}
				}
			}
		}

		// return a sort array
		listTag.sort()
		return listTag
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

	static getScrollTop () {
		return (
			window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
		)
	}

	// Get a unique random number between min/max
	static getRandoms (numPicks, min, max) {
		var len = max - min + 1
		var nums = new Array(len)
		var selections = []
		var i = 0
		var j = 0

		if (min === 0) {
			if (numPicks > max + 1) return
		} else {
			if (numPicks > max - min + 1) return
		}

		// Initialize the array
		for (i = 0; i < len; i++) {
			nums[i] = i + min
		}

		// Randomly pick one from the array
		for (j = 0; j < numPicks; j++) {
			var index = Math.floor(Math.random() * nums.length)
			selections.push(nums[index])
			nums.splice(index, 1)
		}

		return selections
	}
}
