/**
 * Template for link Tumblr post type
 *
 * @param {Object} datas Datas for the post
 *
 * @returns {String} HTML string for the template
 */

export default function TemplateLink (datas) {
	/* prettier-ignore */
	return `
        <div class="card card-link" data-id="${datas.id_string}">
            <div class="card-body">
                <a href="${datas.url}" class="card-linkItem" title="${datas.title}">${datas.title}</a>
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
}
