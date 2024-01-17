let libaries = null;

fetch('https://atugatran-projects.github.io/_Apis/Js_Libaries/index.json')
  .then(res => res.json())
  .then(result => {
    libaries = result;
    loadLib();
  })

// NOTE
// i'm gonna parse the url so my websites json data is not effected;
function loadLib() {
  let libaries_container = document.getElementById('Libaries-container');
  let card = libaries.map((i) => {
    return `
    <li class="cards__item" key=${i.id}>
    <div class="card__body">
      <div class="card__image">
        <img src="${i.img}" alt="">
      </div>
      <div class="card__content">
        <div class="card__title">${i.title}</div>
        <div class="card__links backend">
          <a class="card__btn" href="${i.demo}" target="_blank">
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  </li>
  `
  });
  libaries_container.innerHTML = card.join('');
}
