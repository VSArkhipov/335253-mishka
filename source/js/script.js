var js = document.querySelector(".js-no");
var link = document.querySelector(".main-nav__item--button");
var popup = document.querySelector(".main-nav__list--opened");
var button = document.querySelector(".main-nav__toggle--opened");
var modal__link = document.querySelector(".listen");
var modal__button = document.querySelector(".modal__button--closed");
var modal__window = document.querySelector(".modal__closed");
var modal__background = document.querySelector(".modal__background--closed");
var modal__close = document.querySelector(".modal__close");
var modal__toggle = document.querySelector(".modal__close");
js.classList.remove("js-no");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("main-nav__list--closed");
  button.classList.toggle("main-nav__toggle--closed");
  popup.classList.toggle("main-nav__list--opened");
  button.classList.toggle("main-nav__toggle--opened");
});
modal__link.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal__window.classList.toggle("modal__opened");
  modal__button.classList.toggle("modal__button--opened");
  modal__background.classList.toggle("modal__background--opened");
  modal__window.classList.toggle("modal__closed");
  modal__button.classList.toggle("modal__button--closed");
  modal__background.classList.toggle("modal__background--closed");
});
modal__close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal__toggle.classList.toggle("modal__close");
  modal__window.classList.toggle("modal__closed");
  modal__background.classList.toggle("modal__background--closed");
  modal__toggle.classList.toggle("modal__close");
  modal__window.classList.toggle("modal__opened");
  modal__background.classList.toggle("modal__background--opened");
});
