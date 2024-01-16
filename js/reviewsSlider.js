let reviewsArray = Array.from(document.querySelectorAll(".reviews__container"));
let arrows2 = Array.from(document.querySelectorAll(".caret2"));

console.log(arrows2)

let sliderReviews = (array, direction) => {
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
            prevElement = 2;
        }
        array[prevElement].classList.add("active")
    }
}

arrows2[0].addEventListener("click", () => sliderReviews(reviewsArray, "left"));

arrows2[1].addEventListener("click", () => sliderReviews(reviewsArray, "right"));