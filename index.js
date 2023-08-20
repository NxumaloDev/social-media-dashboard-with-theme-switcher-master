let btn = document.querySelector(".toggle-button");
let circle = document.querySelector(".toggle-circle");

circle.style.right === "3px"
btn.onclick = function themeChange() {
    if (circle.style.right === "3px"){
        circle.style.right = "26px";
        document.querySelector(".body").classList.toggle("dark-mode")
        document.querySelector(".body").classList.remove("light-mode")
    }
    else {
        circle.style.right = "3px";
        document.querySelector(".body").classList.toggle("light-mode")
        document.querySelector(".body").classList.remove("dark-mode")
    }
}

