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
	templatesPosts: {
		audio: datas => {
			/* prettier-ignore */
			return `
				<div class="customCard card card-audio override" data-id="${datas.id_string}">
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
		},
		chat: datas => {
			/* prettier-ignore */
			return `
				<div class="customCard card card-chat" data-id="${datas.id_string}">
					<div class="card-body">
						<a href="#/post/${datas.id_string}" class="card-title">${datas.title}</a>
						<ul class="card-conversations">
							${datas.dialogue.map(line => `
									<li>
										<strong>${line.label}</strong>&nbsp;&nbsp;
										${line.phrase}
									</li>
							`).join('')}
						</ul>
						<ul class="card-tags">
							${datas.tags.map(tag => `
									<li>
										<a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
									</li>
							`).join('')}
						</ul>
					</div>
				</div>
			`
		},
		link: datas => {
			/* prettier-ignore */
			return `
				<div class="customCard card card-link" data-id="${datas.id_string}">
					<div class="card-body">
						<a href="${datas.url}" class="card-link" title="${datas.title}">${datas.title}</a>
						${datas.description}
						<ul class="card-tags">
							${datas.tags.map(tag => `
									<li>
										<a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
									</li>
							`).join('')}
						</ul>
					</div>
				</div>
			`
		},
		photo: datas => {
			const isPhotoset = datas.photos.length > 1
			/* prettier-ignore */
			return `
				<div class="customCard card card-photo${isPhotoset ? ` photoset photos-${datas.photos.length}` : ''}" data-id="${datas.id_string}" data-tags="${datas.tags.join(',').toLowerCase()}">
					<div class="card-body">
						<ul class="card-photos">
						${datas.photos.map(photo => `
								<li>
									<img class="card-picture" src="${photo.original_size.url}" alt="${datas.summary}" />
								</li>
						`).join('')}
						</ul>
						${datas.summary
						? `<a href="#/post/${datas.id_string}" class="card-title">${datas.summary}</a>`
						: ''}
						<ul class="card-tags">
							${datas.tags.map(tag => `
									<li>
										<a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
									</li>
							`).join('')}
						</ul>
					</div>
				</div>
			`
		},
		quote: datas => {
			/* prettier-ignore */
			return `
				<div class="customCard card card-quote" data-id="${datas.id_string}">
					<div class="card-body">
						<blockquote class="card-blockquote">
							<p>${datas.text}</p>
							<footer class="blockquote-footer">${datas.source}</footer>
						</blockquote>
						<ul class="card-tags">
							${datas.tags.map(tag => `
									<li>
										<a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
									</li>
							`).join('')}
						</ul>
					</div>
				</div>
			`
		},
		text: datas => {
			/* prettier-ignore */
			return `
				<div class="customCard card card-text" data-id="${datas.id_string}">
					<div class="card-body">
						<a href="#/post/${datas.id_string}" class="card-title">${datas.title}</a>
						${datas.body}
						<ul class="card-tags">
							${datas.tags.map(tag => `
									<li>
										<a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
									</li>
							`).join('')}
						</ul>
					</div>
				</div>
			`
		},
		video: datas => {
			/* prettier-ignore */
			return `
				<div class="customCard card card-video" data-id="${datas.id_string}" data-tags="${datas.tags.join(',').toLowerCase()}">
					<div class="card-iframe">
						${datas.player[2].embed_code}
					</div>
					<div class="card-body">
						<a href="#/post/${datas.id_string}" class="card-title">${datas.summary}</a>
						<ul class="card-tags">
							${datas.tags.map(tag => `
									<li>
										<a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
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
