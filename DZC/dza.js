'use strict';

const nameProduct = document.querySelector('.input-name');
const reviewProduct = document.querySelector('.input-review');
const saveBtn = document.querySelector('.save-btn');
const loadBtn = document.querySelector('.load-btn');
const clearBtn = document.querySelector('.clear-btn');
const text = document.querySelector('.saved-text');

saveBtn.addEventListener('click', () => {
  if (localStorage.hasOwnProperty(nameProduct.value)) {
    const arrayReviews = JSON.parse(localStorage.getItem(nameProduct.value));
    arrayReviews.push(reviewProduct.value);
    localStorage.setItem(nameProduct.value, JSON.stringify(arrayReviews));
  } else {
    const arrayReviews = [reviewProduct.value];
    localStorage.setItem(nameProduct.value, JSON.stringify(arrayReviews));
  }
  alert('Ваш отзыв сохранен');
});

clearBtn.addEventListener('click', () => {
  localStorage.clear();
  alert('Все отзывы удалены');
});
