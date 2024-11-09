let api = null;

fetch('https://atugatranapi.pages.dev/Apis/indes.json')
    .then(res => res.json())
    .then(result => {
        api = result;
        loadApi();
    })

// NOTE
// i'm gonna parse the url so my websites json data is not effected;
function loadApi() {
    let api_container = document.getElementById('api-container');
    let app = api.map((i) => {
        return `
        <li class="collection-item"><a href="${i.src}">${i.name}</a></li>
        `
    });
    api_container.innerHTML = app.join('');
}
