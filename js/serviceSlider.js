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

// let sliderClicker = (array, event) => {
//     array.forEach(function (item) {
//         item.classList.remove("active")
//     })
//     // array[event.currentTarget.dataset.number].classList.add("active");
//     // console.log(array[event.currentTarget.dataset.number])
// }

let sliderHelperClicker = (event) => {
    console.log(event.currentTarget.dataset.number)
    // sliderClicker(posterArray, event);
    // sliderClicker(imgArray, event);
    // sliderClicker(p1Array, event);
    // sliderClicker(p2Array, event);
}

// posterArray.forEach(function (block) {
//     block.addEventListener("click", (event) => sliderHelperClicker(event))
// })

posterArray.forEach(function (block) {
    block.addEventListener("click", (block) => console.log(block))
})