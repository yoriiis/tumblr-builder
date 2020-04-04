import { Tumblr } from '../dist/tumblr'
import './demo.css'
import '../dist/tumblr.css'

// Get the host from the browser storage if available
const host = window.sessionStorage.getItem('tumblr') || 'yoriiis'
const formInputText = document.querySelector('#form-text')
window.sessionStorage.setItem('tumblr', host)
formInputText.value = host.split('.tumblr.com')[0]

const tumblr = new Tumblr({
	host,
	element: document.querySelector('#tumblr-app'),
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
				<div class="card card-audio override" data-id="${datas.id_string}">
					<div class="card-iframe">
						${datas.player}
					</div>
					<div class="card-body">
						<a href="#/post/${datas.id_string}" class="card-title">${datas.summary}</a>
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
tumblr.init().then(response => {
	console.log(response)

	// No result, redirect to a fresh home with default host
	if (response === false) {
		window.sessionStorage.removeItem('tumblr')
	}
})

// Update the host with the form
document.querySelector('.form').addEventListener('submit', e => {
	e.preventDefault()

	const inputValue = formInputText.value || false
	if (inputValue) {
		window.sessionStorage.setItem('tumblr', `${inputValue}.tumblr.com`)
		window.sessionStorage.removeItem('TumblrJsonData')
		window.location.href = ''
	}
})