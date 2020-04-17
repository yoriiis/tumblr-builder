import Tumblr from '../../dist/tumblr'
import '../../dist/tumblr.css'

const tumblr = new Tumblr({
	element: document.querySelector('#tumblr-app'),
	host: 'yoriiis',
	apiKey: 'wjDj3SRz6JjM0fHgntNdwxOPYkhc2Qz4UgQJIRRpvjDUXBo49T',
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
		tagged: ({ templates, tags, posts }) => {
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

	// No result, redirect to a fresh home with default host
	if (response === false) {
		window.sessionStorage.removeItem('tumblr')
	}
})
