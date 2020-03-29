export default function TemplateLink (datas) {
	return `
        <div class="card">
            <a href="${datas.url}" title="${datas.title}">${datas.title}</a>
            <div class="card-body">
                <h5 class="card-title">${datas.description}</h5>
            </div>
        </div>
    `
}
