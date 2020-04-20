const tumblr = new window.TumblrBuilder({
	element: document.querySelector('#tumblr-app'),
	host: 'tmblr-builder.tumblr.com',
	apiKey: 'X3Hk9uvqCx5OJJVKm9AZX8uh6wf1OhLPtKK5vCJcmQUyngWabO',
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
