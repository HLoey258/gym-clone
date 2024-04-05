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
const zoneBoxDesc = document.querySelectorAll(".zone__box-desc");
const footerTitle = document.querySelector(".footer__title .section__fw");

const scrollFooterActive = () => {
  const scrollY = document.documentElement.scrollTop;
  const currentFooterTitle = footerTitle.offsetHeight;
  const currentTopHeight = footerTitle.offsetTop - 1000;
  if (
    scrollY > currentTopHeight &&
    scrollY <= currentTopHeight + currentFooterTitle
  ) {
    document
      .querySelector(".footer__title .section__fw")
      .classList.add("slide-right");
    document
      .querySelector(".footer__title .section__subtitle")
      .classList.add("slide-right");
  } else if (scrollY < currentTopHeight - 150) {
    document
      .querySelector(".footer__title .section__fw")
      .classList.remove("slide-right");
    document
      .querySelector(".footer__title .section__subtitle")
      .classList.remove("slide-right");
  }
};

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
const scrollZoneBoxDesc = () => {
  const scrollY = document.documentElement.scrollTop;
  zoneBoxDesc.forEach((zoneBox) => {
    const currentZoneBoxHeight = zoneBox.offsetHeight;
    const currentTopHeight = zoneBox.offsetTop + 900;
    const currentZoneBoxItem = zoneBox.getAttribute("id");

    if (
      scrollY > currentTopHeight &&
      scrollY <= currentTopHeight + currentZoneBoxHeight
    ) {
      document
        .querySelector(`.zone__data #${currentZoneBoxItem}`)
        .classList.add("zone-box-appear");
    } else if (scrollY < currentTopHeight) {
      document
        .querySelector(`.zone__data #${currentZoneBoxItem}`)
        .classList.remove("zone-box-appear");
    }
  });
};

window.addEventListener("scroll", scrollReasonActive);
window.addEventListener("scroll", scrollZoneBoxDesc);
window.addEventListener("scroll", scrollFooterActive);

var swiper = new Swiper(".mySwiper-membership", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".button-next-member",
    prevEl: ".button-prev-member",
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
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
    1024: {
      slidesPerView: 3,
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
    1024: {
      slidesPerView: 2,
    },
  },
});
