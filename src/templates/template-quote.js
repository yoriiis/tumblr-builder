export default function TemplateQuote (datas) {
	return `
        <div class="card">
            <blockquote class="blockquote">
                <p>${datas.text}</p>
                <footer class="blockquote-footer">${datas.source}</footer>
            </blockquote>
        </div>
    `
}
