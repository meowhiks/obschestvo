const input = document.querySelector("#menu-input");
const menuNav = document.querySelector("#menu-nav");
const nav = document.querySelector("#nav");

input.addEventListener("change", () => {
    menuNav.classList.toggle("menu__nav--visible");
});

menuNav.innerHTML = nav.innerHTML;

[...nav.children, ...menuNav.children].forEach(link => {
    link.addEventListener("click", () => {
        const target = document.querySelector(link.dataset.href);
        document.body.scrollTo(0, target.offsetTop - 50);
    });
});