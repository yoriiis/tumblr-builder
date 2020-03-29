/* prettier-ignore */
export default function TemplateText (datas) {
	return `
        <div class="card" data-type="text">
            <div class="card-body">
                <h5 class="card-title">${datas.title}</h5>
                ${datas.body}
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
}
