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

// ----- Модальные окна
const pageBody = document.querySelector(`.page-body`);
// const callback = document.querySelector(`.callback`);
const headerCallbackButton = document.querySelector(`.button--callback`);
const orderButton = document.querySelector(`.button--order`);
const consultButton = document.querySelector(`.button--consult`);
const cupboardsTypes = document.querySelectorAll(`.cupboards-types__item`);
const modalCloseButton = document.querySelector(`.modal__close`);
const modals = document.querySelectorAll(`.modal`);

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
  for (let i = 0; i < cupboardsTypes.length; i++) {
    cupboardsTypes[i].addEventListener(`click`, (evt) => {
      evt.preventDefault();
      modalCallback.classList.add(`modal--show`);
      pageBody.classList.add(`page-body--no-scroll`);
      nameCallback.focus();
    });
  }
  modalCloseButton.addEventListener(`click`, () => {
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

// ----- Обработчик скрытых блоков с примерами материалов

const materials = document.querySelectorAll(`.cupboards-materials__item`);
const containers = document.querySelectorAll(`.cupboards-materials__container`);

if (materials) {
  for (let i = 0; i < materials.length; i++) {
    materials[i].addEventListener(`click`, () => {
      const clickedDataTab = materials[i].getAttribute(`data-tab`);
      for (let j = 0; j < containers.length; j++) {
        const dataTabContent = containers[j].getAttribute(`data-tab-content`);
        if (clickedDataTab === dataTabContent) {
          containers[j].classList.toggle(`cupboards-materials__container--shown`);
        } else {
          containers[j].classList.remove(`cupboards-materials__container--shown`);
        }
      }
    });
  }
}

// ----- Показ третьего блока с материалами

const materialsButton = document.querySelector(`.button--materials`);
const materialsThirdBlock = document.querySelector(`.cupboards-materials__list--third `);

if (materialsThirdBlock && materialsButton) {
  materialsButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    materialsThirdBlock.classList.add(`cupboards-materials__list--shown`);
    materialsButton.classList.add(`button--hidden`);
  });
}
