import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const createGallery = (items) => {
  const createGalleryEl = items
    .reduce((array, { preview, original, description }) => {
      array.push(
        `<div class="gallery__item><a class="gallery__link" href="${original}"><img class="gallery__img" scr="${preview}" data-src="${original}" alt="${description}"></a></div>`
      );
      return array;
    }, [])
    .join("");

  gallery.insertAdjacentHTML("beforebegin", createGalleryEl);
};

createGallery(galleryItems);

function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
}

console.log(galleryItems);
