const button = document.querySelector("#scrollback");
const gate = 500;

const onScroll = () => {
    if (document.body.scrollTop > gate || document.documentElement.scrollTop > gate) {
        button.style.opacity = "1";
    } else {
        button.style.opacity = "0";
    }
};
document.body.addEventListener("scroll", onScroll);
onScroll();

const scrollBack = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

button.addEventListener("click", scrollBack);