const input = document.querySelector("#menu-input");
const menuNav = document.querySelector("#menu-nav");
const nav = document.querySelector("#nav");

input.addEventListener("change", () => {
    menuNav.classList.toggle("menu__nav--visible");
});

menuNav.innerHTML = nav.innerHTML;