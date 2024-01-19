let posterArray = Array.from(document.querySelectorAll(".service__poster"));
let reviewsArray = Array.from(document.querySelectorAll(".reviews__container"));
let imgArray = Array.from(document.querySelectorAll(".service__img"));
let p1Array = Array.from(document.querySelectorAll(".p__service1"));
let p2Array = Array.from(document.querySelectorAll(".p__service2"));
let posterArrows = Array.from(document.querySelectorAll(".caret"));
let reviewsArrows = Array.from(document.querySelectorAll(".caret2"));


let sliders = (array, direction) => {
    let activeElement;
    let prevElement;
    let nextElement;
    
    console.log("here")

    array.forEach (function (value, index) {
        console.log(value, index)
    });


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
            prevElement = (array.length-1);
        }
        array[prevElement].classList.add("active")
    }
}

let dataNumbers = () => {
    for (let i = 0; i < posterArray.length; i++) {
        posterArray[i].setAttribute("data-number", (i));
    }
}

dataNumbers();

let sliderHelper = (direction) => {
    sliders(posterArray, direction);
    sliders(imgArray, direction);
    sliders(p1Array, direction);
    sliders(p2Array, direction);
}


let sliderClicker = (array, event) => {
    array.forEach(function (item) {
        item.classList.remove("active")
    })
    array[event.currentTarget.dataset.number].classList.add("active");
}

let sliderHelperClicker = (event) => {
    console.log(event.currentTarget)
    sliderClicker(posterArray, event);
    sliderClicker(imgArray, event);
    sliderClicker(p1Array, event);
    sliderClicker(p2Array, event);
}

posterArray.forEach(function (block) {
    block.addEventListener("click", (event) => sliderHelperClicker(event))
})

posterArrows[0].addEventListener("click", () => sliderHelper("left"));

posterArrows[1].addEventListener("click", () => sliderHelper("right"));

reviewsArrows[0].addEventListener("click", () => sliders(reviewsArray, "left"));

reviewsArrows[1].addEventListener("click", () => sliders(reviewsArray, "right"));