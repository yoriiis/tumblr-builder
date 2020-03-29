/* prettier-ignore */
export default function TemplateChat (datas) {
	return `
        <div class="card" data-type="chat">
            <div class="card-body">
                <h5 class="card-title">${datas.title}</h5>
                <ul class="card-conversations">
                    ${datas.dialogue.map(line => `
                            <li>
                                <strong>${line.label}</strong>&nbsp;&nbsp;
                                ${line.phrase}
                            </li>
                    `).join('')}
                </ul>
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
