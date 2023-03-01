// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
// const items = [];

// galleryItems.forEach(element => {
//   const galleryLink = document.createElement('a');
//   galleryLink.className = 'gallery__link';

//   galleryLink.href = element.original;

//   const galleryImage = document.createElement('img');
//   galleryImage.className = 'gallery__image';

//   galleryImage.src = element.preview;

//   galleryImage.setAttribute('title', element.description);
//   galleryImage.alt = element.description;

//   galleryLink.append(galleryImage);
//   items.push(galleryLink);
// });
// gallery.append(...items);

const items = galleryItems.map(({preview, original, description}) => `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`).join('');

    gallery.innerHTML = items;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});