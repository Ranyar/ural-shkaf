`use strict`;
// ----- Слайдер

const swiper = new Swiper(`.swiper--portfolio`, {
  loop: true,
  slidesPerGroup: 3,
  slidesPerView: 3,
  centeredSlides: false,
  spaceBetween: 30,
  centeredSlidesBounds: true,

  pagination: {
    el: `.swiper-pagination--portfolio`,
  },

  navigation: {
    nextEl: `.swiper-button-next--portfolio`,
    prevEl: `.swiper-button-prev--portfolio`
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

const swiperPartners = new Swiper(`.swiper-partners`, {
  loop: true,
  slidesPerGroup: 3,
  slidesPerView: 3,
  centeredSlides: false,
  spaceBetween: 22,
  centeredSlidesBounds: true,

  pagination: {
    el: `.swiper-pagination--partners`,
  },

  navigation: {
    nextEl: `.swiper-button-next--partners`,
    prevEl: `.swiper-button-prev--partners`
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    },
  },
});

const swiperCertificates = new Swiper(`.swiper-certificates`, {
  loop: true,
  slidesPerGroup: 3,
  slidesPerView: 3,
  centeredSlides: false,
  spaceBetween: 40,
  centeredSlidesBounds: true,

  pagination: {
    el: `.swiper-pagination--certificates`,
  },

  navigation: {
    nextEl: `.swiper-button-next--certificates`,
    prevEl: `.swiper-button-prev--certificates`
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
});

// // ----- Меню
//
// const pageBody = document.querySelector(`.page-body`);
// const pageHeaderWrapper = document.querySelector(`.page-header__wrapper`);
// const mainNav = document.querySelector(`.main-nav`);
// const mainNavList = document.querySelector(`.main-nav__list`);
// const toggleButton = document.querySelector(`.page-header__menu-toggle`);
// const cartIcon = document.querySelector(`.user-menu__item--cart`);
// const logoIcon = document.querySelector(`.page-header__logo`);
// const userMenu = document.querySelector(`.user-menu`);
// const search = document.querySelector(`.page-header__search`);
//
// pageHeaderWrapper.classList.remove(`page-header__wrapper--nojs`);
// mainNav.classList.remove(`main-nav--nojs`);
// mainNavList.classList.remove(`main-nav__list--nojs`);
// toggleButton.classList.remove(`page-header__menu-toggle--nojs`);
// cartIcon.classList.remove(`user-menu__item--nojs`);
// logoIcon.classList.remove(`page-header__logo--nojs`);
// userMenu.classList.remove(`user-menu--nojs`);
// search.classList.remove(`page-header__search--nojs`);
//
// toggleButton.addEventListener(`click`, function () {
//   if (pageHeaderWrapper.classList.contains(`page-header__wrapper--toggled`)) {
//     pageBody.classList.remove(`page-body--lock`);
//     pageHeaderWrapper.classList.remove(`page-header__wrapper--toggled`);
//     pageHeaderWrapper.classList.remove(`page-header__wrapper--lock`);
//     mainNav.classList.remove(`main-nav--toggled`);
//     mainNav.classList.remove(`main-nav__list--toggled`);
//     toggleButton.classList.remove(`page-header__menu-toggle--toggled`);
//     cartIcon.classList.remove(`user-menu__item--toggled`);
//     logoIcon.classList.remove(`page-header__logo--toggled`);
//     userMenu.classList.remove(`user-menu--toggled`);
//     search.classList.remove(`page-header__search--toggled`);
//   } else {
//     pageBody.classList.add(`page-body--lock`);
//     pageHeaderWrapper.classList.add(`page-header__wrapper--toggled`);
//     pageHeaderWrapper.classList.add(`page-header__wrapper--lock`);
//     mainNav.classList.add(`main-nav--toggled`);
//     mainNav.classList.add(`main-nav__list--toggled`);
//     toggleButton.classList.add(`page-header__menu-toggle--toggled`);
//     cartIcon.classList.add(`user-menu__item--toggled`);
//     logoIcon.classList.add(`page-header__logo--toggled`);
//     userMenu.classList.add(`user-menu--toggled`);
//     search.classList.add(`page-header__search--toggled`);
//   }
// });
//
// // ----- Аккордеон
//
const accordions = document.querySelectorAll(`.accordion`);

const accordionItems = document.querySelectorAll(`.accordion__item`);
const content = document.querySelectorAll(`.accordion__content`);

for (let i = 0; i < accordions.length; i++) {
  accordions[i].classList.remove(`accordion--nojs`);
  accordionItems[i].classList.add(`accordion__item--opened`);
}

function accordionHandler(clickedIndex) {
  let shown = document.querySelector(`.accordion__content--show`);
  let opened = document.querySelector(`.accordion__item--opened`);

  if (shown === accordionItems[clickedIndex]) {
    content[clickedIndex].classList.remove(`accordion__content--show`);
    accordionItems[clickedIndex].classList.add(`accordion__item--closed`);
    accordionItems[clickedIndex].classList.remove(`accordion__item--opened`);
  } else {
    content[clickedIndex].classList.add(`accordion__content--show`);
    accordionItems[clickedIndex].classList.remove(`accordion__item--closed`);
    accordionItems[clickedIndex].classList.add(`accordion__item--opened`);
  }

  if (shown) {
    shown.classList.remove(`accordion__content--show`);
    opened.classList.add(`accordion__item--closed`);
    opened.classList.remove(`accordion__item--opened`);
  }
}

if (accordions) {
  for (let i = 0; i < accordionItems.length; i++) {
    accordionItems[i].addEventListener(`click`, () => {
      accordionHandler(i);
    });

    accordionItems[i].addEventListener(`keydown`, (evt) => {
      if (evt.keyCode === 13) {
        evt.preventDefault();
        accordionHandler(i);
      }
    });
  }
}

// // ----- Перехват фокуса на аккордеон на Главной
//
// const followerItemMain = document.querySelector(`.blog-list:last-child a`);
// const interceptorItemMain = document.querySelector(`.accordion__item:first-child`);
//
// if (accordions.length !== 0 && followerItemMain) {
//   followerItemMain.addEventListener(`keydown`, function (event) {
//
//     if (event.keyCode === 9 && !event.shiftKey) {
//       event.preventDefault();
//       interceptorItemMain.focus();
//     }
//   });
// }

// ----- Модальные окна
const pageBody = document.querySelector(`.page-body`);
const callback = document.querySelector(`.callback`);
const headerCallbackButton = document.querySelector(`.button--callback`);
const orderButton = document.querySelector(`.button--order`);
const consultButton = document.querySelector(`.button--consult`);
const modalCloseButton = document.querySelector(`.modal__close`);
const modals = document.querySelectorAll(`.modal`);

console.log(modalCloseButton);

const modalCallback = document.querySelector(`.modal--callback`);
if (modalCallback) {
  const nameCallback = modalCallback.querySelector(`input`);
  headerCallbackButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    modalCallback.classList.add(`modal--show`);
    pageBody.classList.add(`page-body--no-scroll`);
    nameCallback.focus();
  });
  orderButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    modalCallback.classList.add(`modal--show`);
    pageBody.classList.add(`page-body--no-scroll`);
    nameCallback.focus();
  });
  consultButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    modalCallback.classList.add(`modal--show`);
    pageBody.classList.add(`page-body--no-scroll`);
    nameCallback.focus();
  });
  modalCloseButton.addEventListener(`click`, () => {
    console.log(`Клик!`);
    modalCallback.classList.remove(`modal--show`);
    pageBody.classList.remove(`page-body--no-scroll`);
  });
}

if (modals.length !== 0) {
  for (let i = 0; i < modals.length; i++) {
    window.addEventListener(`keydown`, (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        if (modals[i].classList.contains(`modal--show`)) {
          modals[i].classList.remove(`modal--show`);
        } pageBody.classList.remove(`page-body--no-scroll`);
      }
    });

    modals[i].addEventListener(`click`, (evt) => {
      if (evt.target.classList.contains(`modal--show`) || evt.target.classList.contains(`modal__wrapper`)) {
        modals[i].classList.remove(`modal--show`);
        pageBody.classList.remove(`page-body--no-scroll`);
      }
    });
  }
}

// // ----- Перехват фокуса в модальном окне фильтра
//
// const firstElementFilter = document.querySelector(`#necklaces`);
// const lastElementFilter = document.querySelector(`.filter__close`);
//
// if (lastElementFilter) {
//   lastElementFilter.addEventListener(`keydown`, function (event) {
//     event.preventDefault();
//     if (event.keyCode === 9) {
//       firstElementFilter.focus();
//     }
//   });
// }
//
// // ----- Перехват фокуса фильтра в каталоге
//
// const followerItemCatalog = document.querySelector(`.main-nav__item:last-child a`);
// const interceptorItemFilter = document.querySelector(`input[name="necklaces"]`);
// const followerItemFilter = document.querySelector(`.filter__btn:last-child`);
// const interceptorItemCatalog = document.querySelector(`.slider-item--catalog:first-child`);
//
// if (followerItemCatalog && filter) {
//   followerItemCatalog.addEventListener(`keydown`, function (event) {
//     event.preventDefault();
//     if (event.keyCode === 9) {
//       interceptorItemFilter.focus();
//     }
//   });
// }
//
// if (followerItemFilter) {
//   followerItemFilter.addEventListener(`keydown`, function (event) {
//     event.preventDefault();
//     if (event.keyCode === 9) {
//       interceptorItemCatalog.focus();
//     }
//   });
// }
//
// // ----- Перехват фокуса в модальном окне логина
//
// const firstElementLogin = document.querySelector(`#useremail`);
// const lastElementLogin = document.querySelector(`.login__close`);
//
// if (lastElementLogin) {
//   lastElementLogin.addEventListener(`keydown`, function (event) {
//     event.preventDefault();
//     if (event.keyCode === 9) {
//       firstElementLogin.focus();
//     }
//   });
// }
//
// // ----- local storage для модального окна
//
// const loginInputEmail = document.getElementById(`useremail`);
//
// if (login) {
//   loginInputEmail.value = localStorage.getItem(`modal-name`);
//   loginInputEmail.addEventListener(`input`, () => {
//     localStorage.setItem(`modal-name`, loginInputEmail.value);
//   });
// }