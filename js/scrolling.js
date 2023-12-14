let header = document.querySelector(".header");
let scrollBefore = 0;
let scrollPos;
let menu = Array.from(document.querySelectorAll(".menu__item"));
let sections = Array.from(document.querySelectorAll(".menu__a"));
let sectionPositions = [];




function getCoords(array) {
    sectionPositions = array.map(function (elem) {
        return (elem.getBoundingClientRect().top + window.pageYOffset);
    })
    return(sectionPositions);
}

getCoords(sections);

function comparingCoords(scrollPos) {
    // если положение скролла больше элемента массива sectionPositions, добавить ему класс active и убрать у остальных
    for (let i=1; )
}


function hidingHeader() {
    scrollPos = window.scrollY;
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
    comparingCoords();
    // console.log(scrollPos)
})