var link = document.querySelector(".main-nav__item--button");
var popup = document.querySelector(".main-nav__list--closed");
var button = document.querySelector(".main-nav__toggle--closed");

var modallink = document.querySelector(".week__cost")
var modalbutton = document.querySelector(".week__order--closed");
var modalwindow = document.querySelector(".modal__closed");

var modalclose = document.querySelector(".modal__close")
var modaltoggle = document.querySelector(".modal__close")

var goodlink = document.querySelector(".good__description")
var goodbutton = document.querySelector(".good__basket--closed");
var goodwindow = document.querySelector(".modal__closed");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("main-nav__list--opened");
  button.classList.toggle("main-nav__toggle--opened");
	popup.classList.toggle("main-nav__list--closed");
  button.classList.toggle("main-nav__toggle--closed");
});

modallink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalwindow.classList.toggle("modal__opened");
  modalbutton.classList.toggle("week__order--opened");
  modalwindow.classList.toggle("modal__closed");
  modalbutton.classList.toggle("week__order--closed");
});

modalclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modaltoggle.classList.toggle("modal__close");
  modalwindow.classList.toggle("modal__closed");
  modaltoggle.classList.toggle("modal__close");
  modalwindow.classList.toggle("modal__opened");
});

goodlink.addEventListener("click", function (evt) {
  evt.preventDefault();
  goodwindow.classList.toggle("modal__opened");
  goodbutton.classList.toggle("good__basket--opened");
  goodwindow.classList.toggle("modal__closed");
  goodbutton.classList.toggle("good__basket--closed");
});
