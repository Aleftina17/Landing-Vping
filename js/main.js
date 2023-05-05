//Mobile nav btn

const navBtn = document.querySelector(".mobile-nav-btn");
const nav = document.querySelector(".mobile-nav");
const menuIcon = document.querySelector(".nav-icon");
const fade = document.querySelector(".mobile-nav-fade");
const body = document.querySelector("body");

navBtn.onclick = function () {
  nav.classList.toggle("mobile-nav--open");
  fade.classList.toggle("mobile-nav-fade--open");
  menuIcon.classList.toggle("nav-icon--active");
  body.classList.toggle("no-scroll");
};

fade.onclick = function () {
  nav.classList.toggle("mobile-nav--open");
  fade.classList.toggle("mobile-nav-fade--open");
  menuIcon.classList.toggle("nav-icon--active");
  body.classList.toggle("no-scroll");
};

//Pricing

const pricingItems = document.querySelectorAll(".section-pricing__items--item");

pricingItems.forEach((item) => {
  item.addEventListener("click", function () {
    pricingItems.forEach((item) => {
      item.classList.remove("pricing--checked");
    });

    this.classList.add("pricing--checked");
  });
});

//Rate review slider

const slider = document.querySelector(".section-rate__content--review");
const reviews = slider.querySelectorAll(".review");
const buttons = slider.querySelectorAll(".review__btns--btn");

let currentSlide = 0;

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    reviews[currentSlide].classList.add("hidden-x");
    currentSlide = index;
    reviews[currentSlide].classList.remove("hidden-x");
    updateButtons();
  });
});

function updateButtons() {
  buttons.forEach((button, index) => {
    if (index === currentSlide) {
      button.classList.add("review__btns--btn--active");
    } else {
      button.classList.remove("review__btns--btn--active");
    }
  });
}

//FAQ accodrion

const faqTitle = document.querySelectorAll(".section-faq__items--item--title");
const faqContent = document.querySelectorAll(
  ".section-faq__items--item--content"
);

faqTitle.forEach((title, index) => {
  title.addEventListener("click", function () {
    faqContent[index].classList.toggle("hidden-y");
    faqTitle[index].classList.toggle("open");
  });
});
