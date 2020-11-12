'use strict';



const selectP = document.querySelectorAll('section p');

function changeBackgroundColor() {
  return selectP.style.backgroundColor = "#1f6c97";
  }


/* const jihyePhoto = document.querySelector('.jihye');

const jihyeCenterTop = window.innerHeight / 2;
const jihyeCenterLeft = window.innerWidth / 2;

window.addEventListener('load', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  jihyePhoto.style.transform = `translate(${y}px, ${x}px`;

  console.log(x);
});

const pfdaynight = document.querySelector('.day_night');

pfdaynight.addEventListener('click', (e) => {
  window.open('https://jessie41.github.io/Portfolio_day-and-night/main.html');
});

*/