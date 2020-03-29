import { Tumblr } from '../dist/tumblr'

const tumblr = new Tumblr({
	host: 'yoriiis.tumblr.com',
	element: document.querySelector('#tumblr-app'),
	useAPI: true,
	keyAPI: 'wjDj3SRz6JjM0fHgntNdwxOPYkhc2Qz4UgQJIRRpvjDUXBo49T',
	limitData: 250,
	cache: true,
	cacheMethod: 'sessionStorage',
	nearBottom: 350,
	elementPerPage: 2
})

// Initialize the Tumblr from the instance
tumblr.init()
