const navToggle = document.querySelector(".nav__toggle"),
    navMenu = document.querySelector(".nav__menu"),
    navClose = document.querySelector(".nav__close"),
    navItem = document.querySelectorAll(".nav__item"),
    darkMode = document.querySelector(".uil-moon"),
    header = document.querySelector(".header");

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

darkMode.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
});


window.addEventListener("scroll", () => {
    if (window.pageYOffset > 0) {
        header.classList.add("shadow");
    }

    else {
        header.classList.remove("shadow");
        header.style.transition = ".4s";
    };
});