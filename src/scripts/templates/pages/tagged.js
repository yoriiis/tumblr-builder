/**
 * Template for Tumblr tagged page
 *
 * @param {Object}
 * @param {Object} templates List of all template pages functions
 * @param {Object} tag The current hashtag from the route
 * @param {Object} posts List of all articles to display
 *
 * @returns {String} HTML string for the template
 */

export default function TemplateTagged ({ templates, tag, posts }) {
	/* prettier-ignore */
	return `
        <nav class="nav">
                <ul>
                    <li>
                        <a class="btn" href="#_" title="Home">Back to home</a>
                    </li>
                </ul>
            </ul>
        </nav>
        <h3 class="subnav">Tagged: ${tag}</h3>
        <div class="posts" data-infinite-scroll>
            ${posts.map(post => templates[post.type](post)).join('')}
        </div>
    `
}
