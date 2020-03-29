/* prettier-ignore */
export default function TemplateQuote (datas) {
	return `
        <div class="card" data-type="quote" data-id="${datas.id_string}">
            <div class="card-body">
                <blockquote class="card-blockquote">
                    <p>${datas.text}</p>
                    <footer class="blockquote-footer">${datas.source}</footer>
                </blockquote>
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
