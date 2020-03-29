/* prettier-ignore */
export default function TemplateText (datas) {
	return `
        <div class="card" data-type="text" data-id="${datas.id_string}">
            <div class="card-body">
                <h5 class="card-title">${datas.title}</h5>
                ${datas.body}
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
