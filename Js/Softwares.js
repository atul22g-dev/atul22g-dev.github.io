let Softwares = null;

fetch("https://atugatran-projects.github.io/_Apis/Softwares/Software.json")
  .then((res) => res.json())
  .then((result) => {
    Softwares = result;
    loadSoftwares();
  });

// NOTE
// i'm gonna parse the url so my websites json data is not effected;
function loadSoftwares() {
  let Softwares_container = document.getElementById("Softwares-container");
  let Softwares_item = Softwares.map((i) => {
    return `
    <li class="cards__item" key=${i.id}>
    <div class="card__body">
      <div class="card__image">
        <img src="${i.img}" alt="">
      </div>
      <div class="card__content">
        <div class="card__title">${i.title}</div>
        <div class="card__links backend">
          <a class="card__btn" href="${i.Download}"
            target="_blank">
            <span>Download</span>
          </a>
        </div>
      </div>
    </div>
  </li>
  `;
  });
  Softwares_container.innerHTML = Softwares_item.join("");
}
