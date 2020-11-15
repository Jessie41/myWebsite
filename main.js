'use stric'


const home = document.querySelector(".home");

const about = document.querySelector(".about");
const portfolio = document.querySelector(".portfolio");
const fac = document.querySelector(".fac");
const contact = document.querySelector(".contact");



const homePst = document.querySelector(".homePst");
const aboutPst = document.querySelector(".aboutPst");
const portfolioPst = document.querySelector(".portfolioPst");
const facPst = document.querySelector(".facPst");
const contactPst = document.querySelector(".contactPst");


home.addEventListener('click', (e) => {
  homePst.scrollIntoView({
    behavior: 'auto',
    block: 'start',
  });
});

about.addEventListener('click', (e) => {
  aboutPst.scrollIntoView({
    behavior: 'auto',
    block: 'start',
  });
});

portfolio.addEventListener('click', (e) => {
  portfolioPst.scrollIntoView({
    behavior: 'auto',
    block: 'start',
  });
});


fac.addEventListener('click', (e) => {
  facPst.scrollIntoView({
    behavior: 'auto',
    block: 'start',
  });
});

contact.addEventListener('click', (e) => {
  contactPst.scrollIntoView({
    behavior: 'auto',
    block: 'start',
  });
});