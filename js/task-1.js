const categoriesRef = document.querySelector("#categories");
const quantityCategories = categoriesRef.children.length;
console.log(`Всего категорий: ${quantityCategories}`);

const itemRef = document.querySelectorAll("li.item");
itemRef.forEach((item) => {
  const nameCategories = item.firstElementChild.textContent;
  const quantitySubCategories = item.lastElementChild.children.length;
  console.log(
    ` Категория: ${nameCategories}, Количество ${quantitySubCategories}`
  );
});
