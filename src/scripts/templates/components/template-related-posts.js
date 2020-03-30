/* prettier-ignore */
export default function TemplateRelatedPosts ({ posts = [], templates }) {
	return `
        <div class="relatedPosts">
            <h5 class="relatedPosts-title">Related posts</h5>
            ${posts.map(post => templates[post.type](post)).join('')}
        </div>
    `
}
