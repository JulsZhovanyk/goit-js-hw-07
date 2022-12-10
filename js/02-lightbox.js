import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const createGallery = (items) => {
  const createGalleryEl = items
    .map(
      ({ original, preview, description }) =>
        `<a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a>`
    )
    .join("");

  gallery.insertAdjacentHTML("afterbegin", createGalleryEl);
};

createGallery(galleryItems);

function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
}

const instance = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

gallery.addEventListener("click", onImgClick);

console.log(galleryItems);
