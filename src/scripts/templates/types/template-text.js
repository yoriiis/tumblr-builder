/* prettier-ignore */
export default function TemplateText (datas) {
	return `
        <div class="card" data-type="text" data-id="${datas.id_string}">
            <div class="card-body">
                <a href="#/post/${datas.id_string}" class="card-title">${datas.title}</a>
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
