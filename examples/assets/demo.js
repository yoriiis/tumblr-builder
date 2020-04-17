import '../assets/demo.css'

// Get the host from the browser storage if available
export function getHost () {
	return window.sessionStorage.getItem('tumblr') || 'yoriiis'
}

const host = getHost()
const formInputText = document.querySelector('#form-text')
window.sessionStorage.setItem('tumblr', host)
formInputText.value = host.split('.tumblr.com')[0]

// Update the host from the form
document.querySelector('.form').addEventListener('submit', e => {
	e.preventDefault()

	const inputValue = formInputText.value || false
	if (inputValue) {
		window.sessionStorage.setItem('tumblr', `${inputValue}.tumblr.com`)
		window.sessionStorage.removeItem('TumblrJsonData')
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
