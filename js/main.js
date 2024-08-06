"use strict";
const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content-item");

tabItem.forEach(function (element) {
  element.addEventListener("click", open);
});

const burgerBtn = document.getElementById("burgerBtn");
const burgerMenu = document.querySelector(".nav-burger");

burgerBtn.addEventListener("click", function () {
  burgerMenu.style.right = "0";
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function (item) {
    item.classList.remove("tabs__btn-item--active");
  });

  tabContent.forEach(function (item) {
    item.classList.remove("tabs__content-item--active");
  });

  tabTarget.classList.add("tabs__btn-item--active");
  document
    .querySelector(`#${button}`)
    .classList.add("tabs__content-item--active");
}

var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  pagination: {
    el: ".pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});
