// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
console.log(SimpleLightbox);

const galleryRef = document.querySelector('.gallery');

const items = galleryItems.map(item => {
  return `<a class = "gallery__item" href="${item.original}"><img class = "gallery__image" src="${item.preview}" alt="${item.description}"></img></a>`;
});
galleryRef.insertAdjacentHTML('afterbegin', items.join(''));
console.log(galleryRef);

const lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
