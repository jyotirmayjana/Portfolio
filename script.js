//sticky navigation menu js 

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;

window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
        scrollBtn.getElementsByClassName.display = "block";

    }else{
        nav.classList.remove("sticky");
        scrollBtn.style.display ="none"
    }
}