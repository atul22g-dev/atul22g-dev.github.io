// fetch Data for Projects

document.querySelectorAll('.comman').forEach(element => {
    let className = element.classList[1];

    fetch(`https://atugatranapi.pages.dev/${className}/index.json`)
        .then(response => response.json())
        .then(content => loadData(className, content));
});

const loadData = (className, content) => {
    let container = document.getElementById(`${className}-container`);
    let containerContent = content.map(({ id, img, title, demo }) => `
        <li class="cards__item" key=${id}>
            <div class="card__body">
                <div class="card__image">
                    <img src="${img}" alt="">
                </div>
                <div class="card__content">
                    <div class="card__title">${title}</div>
                    <div class="card__links backend">
                        <a class="card__btn" href="${demo}" target="_blank">
                            <span>Live Demo</span>
                        </a>
                    </div>
                </div>
            </div>
        </li>`).join('');

    container.innerHTML = containerContent;
};


// fetch Data for api

document.querySelectorAll('.comman2').forEach(element => {
    let className = element.classList[1];


    fetch(`https://atugatranapi.pages.dev/${className}/index.json`)
        .then(response => response.json())
        .then(content2 => loadApi(className, content2))
});

const loadApi = (className, content2) => {
    let container = document.getElementById(`${className}-container`);
    let app = content2.map((i) => {
        return `
        <li class="collection-item"><a href="${i.src}">${i.name}</a></li>
        `
    });

    container.innerHTML = app.join('');
};
