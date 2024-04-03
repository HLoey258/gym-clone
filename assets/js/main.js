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

// Animation for reason item
const reasonItems = document.querySelectorAll(".reason__list-item");
const scrollReasonActive = () => {
  const scrollY = document.documentElement.scrollTop;
  reasonItems.forEach((reason) => {
    const currentReasonHeight = reason.offsetHeight;
    const currentTopHeight = reason.offsetTop - 450;
    const currentReasonItem = reason.getAttribute("id");

    if (
      scrollY > currentTopHeight &&
      scrollY <= currentTopHeight + currentReasonHeight
    ) {
      document
        .querySelector(`.reason__list #${currentReasonItem}`)
        .classList.add("reason-list-animation-active");
    } else if (scrollY < currentTopHeight - 150) {
      document
        .querySelector(`.reason__list #${currentReasonItem}`)
        .classList.remove("reason-list-animation-active");
    }
  });
};

window.addEventListener("scroll", scrollReasonActive);

var swiper = new Swiper(".mySwiper-membership", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".button-next-member",
    prevEl: ".button-prev-member",
  },
  breakpoints: {
    768: {
      slidesPerView: 3, // Hiển thị 3 phần tử trên desktop
    },
  },
});
var swiper = new Swiper(".mySwiper-related-art", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".button-next-related",
    prevEl: ".button-prev-related",
  },
  breakpoints: {
    768: {
      slidesPerView: 3, // Hiển thị 3 phần tử trên desktop
    },
  },
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".button-next-zone",
    prevEl: ".button-prev-zone",
  },
  breakpoints: {
    768: {
      slidesPerView: 3, // Hiển thị 3 phần tử trên desktop
    },
  },
});
