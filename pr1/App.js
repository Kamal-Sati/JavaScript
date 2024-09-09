

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};



ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__links", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".steps__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".service__container .service__image img", {
  ...scrollRevealOption,
  origin: "left",
});


ScrollReveal().reveal(".service__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});


ScrollReveal().reveal(".experience__card", {
  duration: 1000,
  interval: 500,
});


ScrollReveal().reveal(".dowonload__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".download__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".download__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".download__links", {
  ...scrollRevealOption,
  delay: 1500,
});




const menuBtn = document.querySelector('.open');
const crossBtn = document.querySelector('.off');
const main = document.querySelector('.nav_links');
let isMenuOpen = false;


menuBtn.addEventListener('click', () => {
  isMenuOpen = true;

  
  crossBtn.style.display = 'block';
  menuBtn.style.display = 'none';

  main.classList.add("ulActive");
});


crossBtn.addEventListener('click', () => {
  isMenuOpen = false;

  crossBtn.style.display = 'none';
  menuBtn.style.display = 'block';

  main.classList.remove("ulActive");
});


main.addEventListener('click', () => {
  if (isMenuOpen) {

    isMenuOpen = false;


    crossBtn.style.display = 'none';
    menuBtn.style.display = 'block';

    
    main.classList.remove("ulActive");
  }
});







let clickBtn = document.querySelector(".btnfirst").addEventListener("click", function () {
  let popup = document.querySelector(".Login_form")
  popup.style.display = "block";
  popup.style.opacity = 1;

})

let closeBtn = document.querySelector(".closeBtn").addEventListener("click", function () {
  let popup = document.querySelector(".Login_form")
  popup.style.display = "none";
  popup.style.opacity = 0;


})
