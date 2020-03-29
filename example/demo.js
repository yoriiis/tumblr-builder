import Tumblr from '../dist/tumblr.js'

const tumblr = new Tumblr({
	host: 'yoriiis.tumblr.com',
	element: document.querySelector('#tumblr-app'),
	useAPI: true,
	keyAPI: 'wjDj3SRz6JjM0fHgntNdwxOPYkhc2Qz4UgQJIRRpvjDUXBo49T',
	limitData: 250,
	cache: true,
	cacheMethod: 'sessionStorage',
	postSelector: '.post',
	nearBottom: 350,
	debug: false,
	elementPerPage: 20,
	templates: []
})

// Initialize the Tumblr from the instance
tumblr.init()
