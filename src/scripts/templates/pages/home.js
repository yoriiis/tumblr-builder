/**
 * Template for Tumblr home page
 *
 * @param {Object}
 * @param {Object} templates List of all template pages functions
 * @param {Object} tags List of all hashtags from all available article
 * @param {Object} posts List of all articles to display
 *
 * @returns {String} HTML string for the template
 */

export default function TemplateHome ({ templates, tags, posts }) {
	/* prettier-ignore */
	return `
        <nav class="nav">
                <ul>
                    <li>
                        <a class="btn" href="#_" title="Home">Home</a>
                    </li>
                </ul>
            </ul>
        </nav>
        <div class="tags card">
            <ul class="card-body">
                ${tags.map(tag => `
                    <li>
                        <a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
                    </li>
                `).join('')}
                <li></li>
            </ul>
        </div>
        <div class="posts" data-infinite-scroll>
            ${posts.map(post => templates[post.type](post)).join('')}
        </div>
    `
}
