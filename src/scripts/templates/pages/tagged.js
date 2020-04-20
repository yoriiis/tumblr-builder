/**
 * Template for audio Tumblr post type
 *
 * @param {Object} datas Datas for the post
 *
 * @returns {String} HTML string for the template
 */

/* prettier-ignore */
export default function TemplateTagged ({ templates, tag, posts }) {
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
