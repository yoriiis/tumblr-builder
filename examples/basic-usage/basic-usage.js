const tumblr = new window.TumblrBuilder({
	element: document.querySelector('#tumblr-app'),
	host: 'yoriiis',
	apiKey: 'wjDj3SRz6JjM0fHgntNdwxOPYkhc2Qz4UgQJIRRpvjDUXBo49T',
	limitData: 250,
	cache: true,
	cacheMethod: 'sessionStorage',
	nearBottom: 350,
	elementsPerPage: 2
})

// Initialize the Tumblr from the instance
tumblr.init().then(response => {
	console.log(response)
})
