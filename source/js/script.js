var link = document.querySelector(".main-nav__item--button");
var popup = document.querySelector(".main-nav__list--closed");
var button = document.querySelector(".main-nav__toggle--closed");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("main-nav__list--opened");
  button.classList.toggle("main-nav__toggle--opened");
	popup.classList.toggle("main-nav__list--closed");
  button.classList.toggle("main-nav__toggle--closed");
});
