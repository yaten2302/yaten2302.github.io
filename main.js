const navToggle = document.querySelector(".nav__toggle"),
    navMenu = document.querySelector(".nav__menu"),
    navClose = document.querySelector(".nav__close"),
    navItem = document.querySelectorAll(".nav__item");

navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
});

navItem.forEach((item) => {
    item.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
});