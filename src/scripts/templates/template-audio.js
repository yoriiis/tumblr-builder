/* prettier-ignore */
export default function TemplateAudio (datas) {
	return `
        <div class="card" data-type="audio" data-id="${datas.id_string}">
            <div class="card-iframe">
                ${datas.player}
            </div>
            <div class="card-body">
                <h5 class="card-title">${datas.summary}</h5>
                <a class="btn" href="#/post/${datas.id_string}" title="See more">See more</a>
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
