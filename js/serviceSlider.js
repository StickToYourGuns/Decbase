let posterArray = Array.from(document.querySelectorAll(".service__poster"));
let imgArray = Array.from(document.querySelectorAll(".service__img"));
let p1Array = Array.from(document.querySelectorAll(".p__service1"));
let p2Array = Array.from(document.querySelectorAll(".p__service2"));
let arrows = Array.from(document.querySelectorAll(".caret"));


let slider = (array, direction) => {
    let activeElement;
    let prevElement;
    let nextElement;
    
    array.forEach (function (value, index) {
        if (value.classList.contains("active")) {
            activeElement = index;
            value.classList.remove("active");
        }
    });
    if (direction == "right") {
        nextElement = activeElement+1;
        if (nextElement == array.length) {
            nextElement = 0;
        }
        array[nextElement].classList.add("active")
    } else {
        prevElement = activeElement-1;
        if (prevElement < 0) {
            prevElement = 2;
        }
        array[prevElement].classList.add("active")
    }
}

let sliderHelper = (direction) => {
    slider(posterArray, direction);
    slider(imgArray, direction);
    slider(p1Array, direction);
    slider(p2Array, direction);
}

arrows[0].addEventListener("click", () => sliderHelper("left"));

arrows[1].addEventListener("click", () => sliderHelper("right"));
