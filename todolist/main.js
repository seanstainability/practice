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

function createElement(text) {
  const content = document.createElement("div");
  content.setAttribute("class", "content");

  const list = document.createElement("li");
  list.setAttribute("class", "list");

  const title = document.createElement("span");
  title.setAttribute("class", "list_title");
  title.innerText = text;

  const delBtn = document.createElement("button");
  delBtn.setAttribute("class", "delBtn");
  delBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
  delBtn.addEventListener("click", (e) => {
    contents.removeChild(content);
  });

  const divider = document.createElement("div");
  divider.setAttribute("class", "divider");

  list.appendChild(title);
  list.appendChild(delBtn);

  content.appendChild(list);
  content.appendChild(divider);

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
