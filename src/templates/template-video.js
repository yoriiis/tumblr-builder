export default function TemplateVideo (datas) {
	return `
        <div class="card">
            ${datas.player[2].embed_code}
            <div class="card-body">
                <h5 class="card-title">${datas.caption}</h5>
            </div>
        </div>
    `
}
