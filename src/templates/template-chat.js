/* prettier-ignore */
export default function TemplateChat (datas) {
	return `
        <div class="card">
            <h2>${datas.title}</h2>
            <ul class="conversation">
                ${datas.dialogue.map(line => {
		return `
                        <li>
                            <strong>${line.label}</strong>&nbsp;&nbsp;
                            ${line.phrase}
                        </li>
                    `
	}).join('')}
                        </ul>
        </div>
    `
}
