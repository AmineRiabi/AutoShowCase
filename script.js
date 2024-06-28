"use strict";
// menu icon animation
const menuIcon = document.querySelector(".menu-icon");
const modal = document.querySelector(".modal");
menuIcon.addEventListener("click",()=>{
    if(menuIcon.getAttribute("data-show") == "close"){
        menuIcon.classList.add("active");
        menuIcon.setAttribute("data-show","open");       
        setTimeout(function(){
            modal.style.display = "block";
        },300);
        setTimeout(function(){
            document.querySelector("aside").style.left = "0";
        },320);
    }else{
        menuIcon.classList.remove("active");
        menuIcon.setAttribute("data-show","close");
        setTimeout(function(){
            modal.style.display = "none";
        },500);
        setTimeout(function(){
            document.querySelector("aside").style.left = "-282px";
        },300);
    } 
});
// aside animation
window.onclick = (e)=>{
    if(e.target == modal){
        setTimeout(function(){
            document.querySelector("aside").style.left = "-282px";
        },300);
        setTimeout(function(){
            modal.style.display = "none";
        },500);
        menuIcon.classList.remove("active");
        menuIcon.setAttribute("data-show","close");
    }
}
const navLinks = document.querySelectorAll(".nav-links");
navLinks.forEach((e)=> {
    e.onclick = ()=>{
        navLinks.forEach((e)=>{
            e.classList.remove("active");
        });
        e.classList.add("active");
    }
});
//animation slider
let counter = 0;
const controlPanel = document.querySelector(".control-panel");
setInterval(function(){
    const arr = [0,-33.33,33.33];
    if(controlPanel){
        controlPanel.style.cssText = `transform: translateX(${arr[counter]}%)`;
        counter++;
        if(counter > 2){
            counter = 0;
        }
    }
},4000);
//loader
window.addEventListener("load",function(){
    document.querySelector(".loader").remove();
});