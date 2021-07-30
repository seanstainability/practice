const contents = document.querySelector(".contents");
const input = document.querySelector("input");
const addBtn = document.querySelector(".addBtn");

function onAdd() {
  const text = input.value;
  console.log(text);
  const item = createElement(text);
  contents.appendChild(item);
  item.scrollIntoView({ block: "center" });
  input.value = "";
  input.focus();
}

let id = 0; // UUID
function createElement(text) {
  const content = document.createElement("div");
  content.setAttribute("class", "content");
  content.setAttribute("data-id", id);
  content.innerHTML = `
    <li class="list">
      <span class="list_title">${text}</span
      ><button class="delBtn"><i class="far fa-trash-alt" data-id=${id}></i></button>
    </li>
    <div class="divider"></div>
  `;

  // const list = document.createElement("li");
  // list.setAttribute("class", "list");

  // const title = document.createElement("span");
  // title.setAttribute("class", "list_title");
  // title.innerText = text;

  // const delBtn = document.createElement("button");
  // delBtn.setAttribute("class", "delBtn");
  // delBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
  // delBtn.addEventListener("click", (e) => {
  //   contents.removeChild(content);
  // });

  // const divider = document.createElement("div");
  // divider.setAttribute("class", "divider");

  // list.appendChild(title);
  // list.appendChild(delBtn);

  // content.appendChild(list);
  // content.appendChild(divider);
  id++;
  return content;
}

addBtn.addEventListener("click", (e) => {
  onAdd();
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    onAdd();
  }
});

// 이벤트 위임
contents.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.content[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
