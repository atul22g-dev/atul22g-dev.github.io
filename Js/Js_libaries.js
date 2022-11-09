let Libarry = null;

fetch("https://bogotas.github.io/_Apis/Js_Libaries/index.json")
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
    <li class="collection-item" key=${i.id}>
          <a target="_blank" href=${i.src}>${i.name}</a>
    </li>
  `;
  });
  Libaries_container.innerHTML = Libarry_item.join("");
}
