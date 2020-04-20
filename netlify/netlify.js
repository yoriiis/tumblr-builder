import TumblrBuilder from '../dist/tumblr-builder'
import '../dist/tumblr-builder.css'

import './netlify.css'

const host = window.sessionStorage.getItem('tumblr') || 'tmblr-builder.tumblr.com'

const tumblr = new TumblrBuilder({
	element: document.querySelector('#tumblr-app'),
	host,
	apiKey: 'ZbYkYWjthx8Uf7eUY6795MYOKUYRb9xoAXlneH7AmAtyv0LQ2x',
	limitData: 250,
	cache: true,
	cacheMethod: 'sessionStorage',
	nearBottom: 350,
	elementsPerPage: 2
})

// Initialize the Tumblr from the instance
tumblr.init().then(response => {
	console.log(response)

	// No result, redirect to a fresh home with default host
	if (response === false) {
		window.sessionStorage.removeItem('tumblr')
	}
})

const formInputText = document.querySelector('#form-text')
window.sessionStorage.setItem('tumblr', host)
formInputText.value = host.split('.tumblr.com')[0]

// Update the host from the form
document.querySelector('.form').addEventListener('submit', e => {
	e.preventDefault()

	const inputValue = formInputText.value || false
	if (inputValue) {
		window.sessionStorage.setItem('tumblr', `${inputValue}.tumblr.com`)
		window.sessionStorage.removeItem('TumblrBuilderJsonData')
		window.location.href = ''
	}
})

// Update the dark mode from the button
const html = document.querySelector('html')
html.querySelector('[data-button-darkmode]').addEventListener('click', e => {
	e.preventDefault()

	const darkMode = html.classList.contains('darkMode')
	if (darkMode) {
		html.classList.remove('darkMode')
	} else {
		html.classList.add('darkMode')
	}

	window.localStorage.setItem('tumblrDarkMode', !darkMode)
})
