/**
 * Template for video Tumblr post type
 *
 * @param {Object} datas Datas for the post
 *
 * @returns {String} HTML string for the template
 */

/* prettier-ignore */
export default function TemplateVideo (datas) {
	return `
        <div class="card card-video" data-id="${datas.id_string}" data-tags="${datas.tags.join(',').toLowerCase()}">
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
