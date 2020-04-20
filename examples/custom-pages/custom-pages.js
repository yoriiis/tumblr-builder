const tumblr = new window.TumblrBuilder({
	element: document.querySelector('#tumblr-app'),
	host: 'tmblr-builder.tumblr.com',
	apiKey: 'X3Hk9uvqCx5OJJVKm9AZX8uh6wf1OhLPtKK5vCJcmQUyngWabO',
	limitData: 250,
	cache: true,
	cacheMethod: 'sessionStorage',
	nearBottom: 350,
	elementsPerPage: 2,
	templatesPages: {
		home: ({ templates, tags, posts }) => {
			/* prettier-ignore */
			return `
				Custom home page
				<nav class="nav">
						<ul>
							<li>
								<a class="btn" href="#_" title="Home">Home</a>
							</li>
						</ul>
					</ul>
				</nav>
				<div class="tags card">
					<ul class="card-body">
						${tags.map(tag => `
							<li>
								<a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
							</li>
						`).join('')}
						<li></li>
					</ul>
				</div>
				<div class="posts" data-infinite-scroll>
					${posts.map(post => templates[post.type](post)).join('')}
				</div>
			`
		},
		tagged: ({ templates, tag, posts }) => {
			/* prettier-ignore */
			return `
				Custom tagged page
				<nav class="nav">
						<ul>
							<li>
								<a class="btn" href="#_" title="Home">Home</a>
							</li>
						</ul>
					</ul>
				</nav>
				<h3 class="subnav">Tagged: ${tag}</h3>
				<div class="posts">
					${posts.map(post => templates[post.type](post)).join('')}
				</div>
			`
		},
		post: ({ templates, posts, relatedPosts }) => {
			/* prettier-ignore */
			return `
				Custom post pages
				<nav class="nav">
						<ul>
							<li>
								<a class="btn" href="#_" title="Home">Home</a>
							</li>
						</ul>
					</ul>
				</nav>
				<div class="posts">
					${posts.map(post => templates[post.type](post)).join('')}
				</div>
				${relatedPosts.length ? `
					<div class="relatedPosts">
						<h5 class="relatedPosts-title">My related posts</h5>
						${relatedPosts.map(post => templates[post.type](post)).join('')}
					</div>
				` : ''}
    		`
		}
	}
})

// Initialize the Tumblr from the instance
tumblr.init().then(response => {
	console.log(response)
})
