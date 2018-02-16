var link = document.querySelector(".main-nav__item--button");
var popup = document.querySelector(".main-nav__list--closed");
var button = document.querySelector(".main-nav__toggle--closed");

var modallink = document.querySelector(".listen")
var modalbutton = document.querySelector(".modalbutton-closed");
var modalwindow = document.querySelector(".modal__closed");

var modalclose = document.querySelector(".modal__close")
var modaltoggle = document.querySelector(".modal__close")

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
  modalbutton.classList.toggle("modalbutton-opened");
  modalwindow.classList.toggle("modal__closed");
  modalbutton.classList.toggle("modalbutton-closed");
});

modalclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modaltoggle.classList.toggle("modal__close");
  modalwindow.classList.toggle("modal__closed");
  modaltoggle.classList.toggle("modal__close");
  modalwindow.classList.toggle("modal__opened");
});
