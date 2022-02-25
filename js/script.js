const splash = document.querySelector('.hm-splash');

var lgn = document.getElementById("login");
var rgstr = document.getElementById("register");
var btn = document.getElementById("btn");

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(() =>{
        splash.classList.add('display-none');
    }, 2000);
})

function register(){
    lgn.style.left = "-400px";
    rgstr.style.left = "50px";
    btn.style.left = "110px";
}

function login(){
    lgn.style.left = "50px";
    rgstr.style.left = "450px";
    btn.style.left = "0px";
}