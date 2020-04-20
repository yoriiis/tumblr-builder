/**
 * Template for photo/photoset Tumblr post type
 *
 * @param {Object} datas Datas for the post
 *
 * @returns {String} HTML string for the template
 */

export default function TemplatePhoto (datas) {
	const isPhotoset = datas.photos.length > 1
	/* prettier-ignore */
	return `
        <div class="card card-photo${isPhotoset ? ` photoset photos-${datas.photos.length}` : ''}" data-id="${datas.id_string}" data-tags="${datas.tags.join(',').toLowerCase()}">
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
}
