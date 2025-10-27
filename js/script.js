
const btnActive = document.querySelector(".btn");
const iconSunBox = document.querySelector(".fa-sun");
let boxToggle = document.querySelector(".box-toggle");
const body = document.querySelector("body");
const croix = document.querySelector(".fa-xmark");
const pad = document.querySelector(".fa-gamepad");
const slogan = document.getElementById("slogan");

let bool = true;

btnActive.addEventListener('click', function () {
    if(bool){
        btnActive.style.transform = 'translate(34px)';
        btnActive.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        body.style.backgroundColor = '#333';
        boxToggle.style.background = 'linear-gradient(to left, rgba(90, 88, 88, 1), gray';
        boxToggle.style.border = 'solid 2px rgba(0, 0, 0, 1)';
        croix.style.color = 'whitesmoke';
        pad.style.color = 'whitesmoke';
        slogan.style.color = 'white';
        bool = false;
    }
    else{
        btnActive.style.transform = 'translate(0px)';
        btnActive.style.backgroundColor = 'rgb(186, 161, 17)';
        body.style.backgroundColor = 'whitesmoke';
        boxToggle.style.background = 'linear-gradient(to right, rgb(163, 162, 162), rgb(255, 255, 255))';
        boxToggle.style.border = 'solid 2px rgb(186, 161, 17)';
        slogan.style.color = 'rgb(105, 25, 25)';
        croix.style.color = 'rgb(105, 25, 25)';
        pad.style.color = 'rgb(105, 25, 25)';
        bool = true;
    }
});