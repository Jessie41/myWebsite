
const about = document.querySelector(".about");
const portfolio = document.querySelector(".portfolio");
const fac = document.querySelector(".fac");
const contact = document.querySelector(".contact");



const aboutPst = document.querySelector(".aboutPst");
const portfolioPst = document.querySelector(".portfolioPst");
const facPst = document.querySelector(".facPst");
const contactPst = document.querySelector(".contactPst");



about.addEventListener('click', (e) => {
  aboutPst.scrollIntoView({
    behavior: 'auto',
    block: 'center',
  });
});

portfolio.addEventListener('click', (e) => {
  portfolioPst.scrollIntoView({
    behavior: 'auto',
    block: 'center',
  });
});


fac.addEventListener('click', (e) => {
  facPst.scrollIntoView({
    behavior: 'auto',
    block: 'center',
  });
});

contact.addEventListener('click', (e) => {
  contactPst.scrollIntoView({
    behavior: 'auto',
    block: 'center',
  });
});