{
  /* <div id="controls">
      <input type="number" min="0" max="100" step="1" />
      <button type="button" data-action="render">Создать</button>
      <button type="button" data-action="destroy">Очистить</button>
    </div>

    <div id="boxes"></div> */
}

const ref = {
  controls: document.querySelector("#controls"),
  input: document.querySelector(".input"),
  render: document.querySelector("[data-action = 'render']"),
  destroy: document.querySelector("[data-action = 'destroy']"),
  box: document.querySelector("#boxes"),
};

ref.input.addEventListener("change", onInputChange);
ref.destroy.addEventListener("click", onInputDel);

function onInputChange(event) {
  const createQuntity = Number(event.currentTarget.value);
  console.log(createQuntity);
  for (let i = 1; i <= +createQuntity; i += 1) {
    ref.render.addEventListener("click", () => {
      const newElement = document.createElement("div");
      console.log(newElement);
      newElement.classList.add("container");
      newElement.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 255
      )},${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 255
      )})`;

      newElement.style.width = `${30 + 10 * i}px`;
      newElement.style.height = `${30 + 10 * i}px`;
      ref.box.append(newElement);
    });
  }
}

function onInputDel(event) {
  ref.box.innerHTML = " ";
  document.location.reload();
}

//const newElement = document.createElement("div");
//console.log(newElement);
