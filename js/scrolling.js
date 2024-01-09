let headerTrigger = document.querySelector(".header__trigger");
let header = document.querySelector(".header");
let scrollBefore = 0;
let mouseY = 0;
let scrollPosition;
let menuArray = Array.from(document.querySelectorAll(".menu__item"));
let sectionsArray = Array.from(document.querySelectorAll(".menu__a"));
let sectionPositions = [];

let connecting = Array.from(document.querySelectorAll(".achievement__connect__svg"))
let achievements = (document.querySelector(".about3").getBoundingClientRect().top + window.pageYOffset)-300;

let all = Array.from(document.querySelectorAll("section"));

let hideAll = () => all.forEach(function (section) {
    section.style.opacity=0;
})

hideAll();


function getCoords(array) {
    sectionPositions = array.map(function (elem) {
        return (elem.getBoundingClientRect().top + window.pageYOffset);
    })
    return(sectionPositions);
}

function comparingCoords(scrollPosition) {
    let activeSection = -1;

    for (let i = 0; i < sectionPositions.length; i++) {
        if (scrollPosition >= sectionPositions[i]) {
            activeSection = i;
        } else {
            break;
        }
    }

    if (activeSection !== -1) {
        menuArray.forEach(function(e) {
            e.classList.remove("active");
        })
        menuArray[activeSection].classList.add("active")
    }
}

function hidingHeader() {
    if(scrollBefore > scrollPosition) {
        header.classList.remove("hidden");
        scrollBefore = scrollPosition;
    } else if ((scrollBefore < scrollPosition) && (mouseY<115)) {
        header.classList.remove("hidden");
        scrollBefore = scrollPosition;
    } else {
        header.classList.add("hidden");
        scrollBefore = scrollPosition;
    }
}

window.addEventListener("scroll", () => {
    scrollPosition = window.scrollY;
    hidingHeader();
    getCoords(sectionsArray);
    comparingCoords(scrollPosition);
    if (scrollPosition >= achievements) {
        connecting.forEach(function(item) {
            item.classList.add("active");
        })
    }
})

window.addEventListener('mousemove', (event) => {
    mouseY = event.clientY;
    if (mouseY<115) {
        header.classList.remove("hidden");
    }
});