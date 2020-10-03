const btnDecRef = document.querySelector(".btn-dec");
const countRef = document.querySelector(".counter");
const btnIncRef = document.querySelector(".btn-inc");
const containerRef = document.querySelector("#counter-container");
containerRef.style.marginTop = "10px";
btnDecRef.style.backgroundColor = "red";
btnDecRef.style.padding = "10px";
btnIncRef.style.backgroundColor = "green";
btnIncRef.style.padding = "10px";
countRef.style.padding = "10px";

let result = Number(countRef.textContent);

btnDecRef.addEventListener("click", () => {
  if (result > 0) {
    countRef.textContent = result -= 1;
  }
});

btnIncRef.addEventListener("click", () => {
  countRef.textContent = result += 1;
});
