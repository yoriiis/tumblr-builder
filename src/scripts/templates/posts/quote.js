/**
 * Template for quote Tumblr post type
 *
 * @param {Object} datas Datas for the post
 *
 * @returns {String} HTML string for the template
 */

export default function TemplateQuote (datas) {
	/* prettier-ignore */
	return `
        <div class="card card-quote" data-id="${datas.id_string}">
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
}
