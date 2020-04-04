import { Tumblr } from '../dist/tumblr'
import '../dist/tumblr.css'

const tumblr = new Tumblr({
	host: 'yoriiis.tumblr.com',
	element: document.querySelector('#tumblr-app'),
	useAPI: true,
	keyAPI: 'wjDj3SRz6JjM0fHgntNdwxOPYkhc2Qz4UgQJIRRpvjDUXBo49T',
	limitData: 250,
	cache: true,
	cacheMethod: 'sessionStorage',
	nearBottom: 350,
	elementPerPage: 2,
	templates: {
		audio: datas => {
			/* prettier-ignore */
			return `
				<div class="card override" data-type="audio" data-id="${datas.id_string}">
					<div class="card-iframe">
						${datas.player}
					</div>
					<div class="card-body">
						<h5 class="card-title">${datas.summary}</h5>
						<ul class="card-tags">
							${datas.tags.map(tag => `
									<li>
										<a href="${datas.blog.url}tagged/${tag}" title="#${tag}">#${tag}</a>
									</li>
							`).join('')}
						</ul>
					</div>
				</div>
			`
		}
	}
})

// Initialize the Tumblr from the instance
tumblr.init()
