export default function TemplateText (datas) {
	return `
        <div class="card">
            <h2>${datas.title}</h2>
            <p>${datas.body}</p>
        </div>
    `
}
