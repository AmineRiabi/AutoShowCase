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
const btnChevron = document.getElementById("btn-chevron");
const navLinksCars = document.querySelector(".nav-links-cars");
navLinks[1].addEventListener("click",()=>{
    btnChevron.classList.toggle("active");
    if(btnChevron.classList.contains("active")){
        navLinksCars.style.display = "block";
    }else{
        navLinksCars.style.display = "none";
    }
});


const btnUp = document.querySelector(".btn-up");
const speed = document.querySelector(".speed");
const headings = document.querySelectorAll(".headings");
let started = false;
window.onscroll = function(){
    window.scrollY >= 50 ? document.querySelector(".main-bar").style.backgroundColor = "#000000" 
    : document.querySelector(".main-bar").style.backgroundColor = "transparent";
    //animation button up
    window.scrollY >= 700 ? btnUp.classList.add("show") : btnUp.classList.remove("show");
    //animation Increase Numbers On Scrolling
    if(speed){
        if(window.scrollY >= speed.offsetTop - 300){
           if(!started){
                headings.forEach((e)=> startCount(e));
           }
           started = true;
        }
    }
}
function startCount(el){
    let numberDataSet = el.dataset.count;
    let count = setInterval(()=>{
        el.textContent++;
        if(el.textContent == numberDataSet){
            clearInterval(count);
        }
    },2000 / numberDataSet);
}
//event button up
btnUp.addEventListener("click",()=>{
    window.scrollTo({
        top: 0
    });
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

