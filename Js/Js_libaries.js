let Libarry = null;

fetch("https://atugatran-projects.github.io/_Apis/Js_Libaries/index.json")
  .then((res) => res.json())
  .then((result) => {
    Libarry = result;
    loadLibaries();
  });

// NOTE
// i'm gonna parse the url so my websites json data is not effected;
function loadLibaries() {
  let Libaries_container = document.getElementById("Libaries-container");
  let Libarry_item = Libarry.map((i) => {
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

  // <li class="Libaries-item" key=${i.id}>
  //         <a target="_blank" href=${i.src}>${i.name}</a>
  // </li>

  });
  Libaries_container.innerHTML = Libarry_item.join("");
}
