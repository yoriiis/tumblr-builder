/* prettier-ignore */
export default function TemplateAudio (datas) {
	return `
        <div class="card" data-type="audio" data-id="${datas.id_string}">
            <div class="card-iframe">
                ${datas.player}
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
