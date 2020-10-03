const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
  "Молоко",
  "Пирожки",
];

const listRef = document.querySelector("#ingredients");

const makeCount = function (array) {
  return array.map((item) => {
    const itemList = document.createElement("li");
    itemList.append(item);
    return itemList;
  });
};

const result = makeCount(ingredients);

listRef.append(...result);
