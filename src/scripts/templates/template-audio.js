/* prettier-ignore */
export default function TemplateAudio (datas) {
	return `
        <div class="card" data-type="audio">
            <div class="card-iframe">
                ${datas.player}
            </div>
            <div class="card-body">
                <h5 class="card-title">${datas.summary}</h5>
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
