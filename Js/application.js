let application = null;

fetch('https://atugatranapi.pages.dev/App/index.json')
    .then(res => res.json())
    .then(result => {
        application = result;
        loadApp();
    })

// NOTE
// i'm gonna parse the url so my websites json data is not effected;
function loadApp() {
    let application_container = document.getElementById('App-container');
    let app = application.map((i) => {
        return `
    <li class="cards__item" key=${i.id}>
    <div class="card__body">
      <div class="card__image">
        <img src="${i.img}" alt="">
      </div>
      <div class="card__content">
        <div class="card__title">${i.title}</div>
        <div class="card__links">
          <a class="card__btn" href="${i.demo}" target="_blank">
            <span>Download</span>
          </a>
          <a class="card__btn" href="${i.src}"
            target="_blank">
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </div>
  </li>
  `
    });
    application_container.innerHTML = app.join('');
}
