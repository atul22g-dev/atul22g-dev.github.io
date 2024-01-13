let backend = null;

fetch("https://atugatran-projects.github.io/_Apis/backend/index.json")
  .then((res) => res.json())
  .then((result) => {
    backend = result;
    loadbackend();
  });

// NOTE
// i'm gonna parse the url so my websites json data is not effected;
function loadbackend() {
  let Backend_container = document.getElementById("Backend-container");
  let backend_item = backend.map((i) => {
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
  `;
  });
  Backend_container.innerHTML = backend_item.join("");
}
