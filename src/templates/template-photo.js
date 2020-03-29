export default function TemplatePhoto (datas) {
	return `
        <div class="card">
            <img class="card-img-top" src="${datas.photos[0].original_size.url}" alt="${datas.summary}" />
            <div class="card-body">
                <h5 class="card-title">${datas.caption}</h5>
            </div>
        </div>
    `
}
