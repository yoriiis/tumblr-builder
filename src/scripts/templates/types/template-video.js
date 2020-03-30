/* prettier-ignore */
export default function TemplateVideo (datas) {
	return `
        <div class="card" data-type="video" data-id="${datas.id_string}" data-tags="${datas.tags.join(',').toLowerCase()}">
            <div class="card-iframe">
                ${datas.player[2].embed_code}
            </div>
            <div class="card-body">
                <a href="#/post/${datas.id_string}" class="card-title">${datas.summary}</a>
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
