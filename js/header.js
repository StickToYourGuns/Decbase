let header = document.querySelector(".header");
let scrollBefore = 0;

function hidingHeader() {
    const scrollPos = window.scrollY;
    if(scrollBefore > scrollPos) {
        header.classList.remove("hidden");
        scrollBefore = scrollPos;
    } else {
        header.classList.add("hidden");
        scrollBefore = scrollPos;
    }
}

window.addEventListener("scroll", function() {
    hidingHeader();
})