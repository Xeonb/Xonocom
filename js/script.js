"use strict";

const lines = document.querySelector(".logotext2")
const menu = document.querySelector(".mobile-menu")
const close = document.querySelector(".close-btn")


lines.addEventListener("click", () => {
    menu.style.display = "flex";
});

close.addEventListener("click", () => {
    menu.style.display = "none";
});