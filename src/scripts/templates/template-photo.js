/* prettier-ignore */
export default function TemplatePhoto (datas) {
	return `
        <div class="card" data-type="photo" data-id="${datas.id_string}">
            <div class="card-body">
                <img class="card-picture" src="${datas.photos[0].original_size.url}" alt="${datas.summary}" />
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
