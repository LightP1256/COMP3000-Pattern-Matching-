const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", ()=> {
    document.body.classList.toggle("dark");
})
const togHamburger = document.querySelector("#togHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const faded = document.querySelectorAll(".been-faded");

togHamburger.addEventListener("click", function(){
    if(header.classList.contains("open")){ //Close hamburger nav
        body.classList.remove("stop-scroll");
        header.classList.remove("open");
        faded.forEach(function (element){
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
        });
    }
    else { //Open hamburger nav
        body.classList.add("stop-scroll");
        header.classList.add("open");
        faded.forEach(function (element){
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
        });
    }
})