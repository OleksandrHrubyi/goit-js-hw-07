const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const addPicture = function (array) {
  return array.map(({ url, alt }) => {
    const itemRef = document.createElement("li");

    const imageRef = document.createElement("img");
    imageRef.src = url;
    imageRef.alt = alt;
    imageRef.style.width = "480px";
    imageRef.style.height = "320px";
    itemRef.append(imageRef);
    return itemRef;
  });
};

const result = addPicture(images);

const galleryRef = document.querySelector("#gallery");

galleryRef.append(...result);
