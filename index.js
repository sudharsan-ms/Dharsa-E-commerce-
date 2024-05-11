/* slide bar open and close functionality */

var menutoggle = document.querySelector(".menu-toggle");
var slidebar = document.querySelector(".slide-bar")
function slideopen(){
   slidebar.style.left="0";
}

var xmark=document.querySelector(".x-mark")
function closeslide(){
    slidebar.style.left="-50%";
}