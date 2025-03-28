document.querySelectorAll('.comman2').forEach(element => {
    let className = element.classList[1];


    fetch(`https://atualapis.pages.dev/ProjectsApis/${className}.json`)
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
