const ref = {
  input: document.querySelector("#font-size-control"),
  textlabel: document.querySelector("#text"),
};

ref.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  const labelValue = ref.textlabel.textContent;
  console.log(labelValue);
  const numberEvent = Number(event.currentTarget.value);
  console.log(numberEvent);
  ref.textlabel.style.fontSize = `${numberEvent}px`;
}
