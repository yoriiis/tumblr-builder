/* prettier-ignore */
export default function TemplateTags (datas) {
	return `
        <div class="tags card">
            <ul class="card-body">
                ${datas.map(tag => `
                    <li>
                        <a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
                    </li>
                `).join('')}
                <li></li>
            </ul>
        </div>
    `
}
