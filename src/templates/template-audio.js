export default function TemplateAudio (datas) {
	return `
        <div class="card">
            ${datas.player}
            <div class="card-body">
                <h5 class="card-title">${datas.summary}</h5>
            </div>
        </div>
    `
}
