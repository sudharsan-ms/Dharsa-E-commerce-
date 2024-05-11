var search = document.getElementById("search");
var productcontainer=document.getElementById("product");
var productimg=productcontainer.querySelectorAll("div");

var entered ="";

search.addEventListener("keyup",function(){
    entered=search.value.toUpperCase();

    for(var i=0;i<productimg.length;i++)
    {
        var name=productimg[i].querySelector("p").textContent;

        if(name.toUpperCase().indexOf(entered)<0)
        {
            productimg[i].style.display="none";
        }
        else{
            productimg[i].style.display="block"
        }
    }
})

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