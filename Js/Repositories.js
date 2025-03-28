let Repositories = null;

fetch('https://atualapis.pages.dev/ProjectsApis/Repositories.json')
  .then(res => res.json())
  .then(result => {
    Repositories = result;
    loadRepo();
  })

// NOTE
// i'm gonna parse the url so my websites json data is not effected;
function loadRepo() {
  let Repositories_container = document.getElementById('Repositories-container');
  let card = Repositories.map((i) => {
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
            <span>Live Demo</span>
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
  Repositories_container.innerHTML = card.join('');
}
