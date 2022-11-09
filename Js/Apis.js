let Api = null;

fetch("https://bogotas.github.io/_Apis/index.json")
  .then((res) => res.json())
  .then((result) => {
    Api = result;
    loadApis();
  });

// NOTE
// i'm gonna parse the url so my websites json data is not effected;
function loadApis() {
  let Apis_container = document.getElementById("Apis-container");
  let Apis_item = Api.map((i) => {
    return `
    <li class="Libaries-item" key=${i.id}>
          <a target="_blank" href=${i.src}>${i.name}</a>
    </li>
  `;
  });
  Apis_container.innerHTML = Apis_item.join("");
}
