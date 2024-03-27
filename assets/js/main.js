// Overlay Variable
const overLay = document.querySelector("#body-overlay");
// Toggle for navigation
const headerMenuButton = document.querySelector(".head__menu-icon");
const navContainer = document.querySelector(".nav__container");
const navCloseButton = document.querySelector(".nav__toggle");
const headerLogo = document.querySelector(".head__logo");

headerMenuButton.addEventListener("click", () => {
  navContainer.classList.add("nav-show");
  overLay.classList.add("body-overlay-active");
  headerLogo.classList.add("nav-logo-show");
});
navCloseButton.addEventListener("click", () => {
  navContainer.classList.remove("nav-show");
  overLay.classList.remove("body-overlay-active");
  headerLogo.classList.remove("nav-logo-show");
});
