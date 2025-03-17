let Projects = null;

fetch('https://atugatranapi.pages.dev/Projects/index.json')
  .then(res => res.json())
  .then(result => {
    Projects = result;
    loadCards();
  })

// NOTE
// i'm gonna parse the url so my websites json data is not effected;
function loadCards() {
  let Project_container = document.getElementById('Projects-container');
  let card = Projects.map((i) => {
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
  Project_container.innerHTML = card.join('');
}
