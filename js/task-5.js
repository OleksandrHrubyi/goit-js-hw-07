const ref = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};

ref.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  ref.nameLabel.textContent = event.currentTarget.value;
}
