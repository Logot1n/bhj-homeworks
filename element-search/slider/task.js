const arrowPrev = document.querySelector(".slider__arrow_prev");
const arrowNext = document.querySelector(".slider__arrow_next");
const sliderItems = [...document.querySelectorAll(".slider__item")];

let currentSlide = 0;

const showSlide = (slide) => {
  sliderItems[currentSlide].classList.remove("slider__item_active");
  currentSlide = (slide + sliderItems.length) % sliderItems.length;
  sliderItems[currentSlide].classList.add("slider__item_active");
};

arrowPrev.onclick = () => {
  showSlide(currentSlide - 1);
};

arrowNext.onclick = () => {
  showSlide(currentSlide + 1);
};
