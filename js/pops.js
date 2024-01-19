
const popUpCallers = document.querySelectorAll(".popup");

const popUp = document.querySelector(".pop__container");

const close = document.querySelector(".pop__close")


popUpCallers.forEach(function(button) {
    button.addEventListener("click", function(){
        popUp.classList.add("active");
    })
});

close.addEventListener("click", function(){
    popUp.classList.remove("active");
})


popUp.addEventListener( "click", function(e) {
    if (e.target == popUp) {
        popUp.classList.remove("active");
    }
})

document.addEventListener( "keydown", function(e) {
    if (e.keyCode == 27) {
        popUp.classList.remove("active");
    }
})