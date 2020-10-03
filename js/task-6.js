const ref = {
  input: document.querySelector("#validation-input"),
};

ref.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  const valueInput = event.currentTarget.value;
  const lengthInput = valueInput.length;
  const valueData = Number(ref.input.dataset.length);
  if (lengthInput === valueData) {
    ref.input.classList.add("valid");
    ref.input.classList.remove("invalid");
  } else {
    ref.input.classList.add("invalid");
  }
}
