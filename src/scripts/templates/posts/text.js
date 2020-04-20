/**
 * Template for text Tumblr post type
 *
 * @param {Object} datas Datas for the post
 *
 * @returns {String} HTML string for the template
 */

export default function TemplateText (datas) {
	/* prettier-ignore */
	return `
        <div class="card card-text" data-id="${datas.id_string}">
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
}
