import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const createGallery = (items) => {
  const createGalleryEl = items
    .map(
      ({ original, preview, description }) =>
        `<div class="gallery__item><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a></div>`
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

  const instance = basicLightbox.create(
    `
	<img src="${event.target.dataset.source}">
`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onEscClick);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onEscClick);
      },
    }
  );
  instance.show();

  function onEscClick(evt) {
    if (evt.code !== "Escape") {
      return;
    }
    instance.close();
  }
}

gallery.addEventListener("click", onImgClick);

console.log(galleryItems);
