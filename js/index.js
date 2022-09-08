window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;

var menuAll = document.querySelector(".menu__all");
var iconHidden = document.querySelector(".ri-home-4-fill");
var hiddenScroll = document.querySelector(".hiddenscroll");
var hiddenScrollItem = document.querySelector(".hidden__scroll");
var itemSeperate = document.querySelector(".seperate");
var closeIcon = document.querySelector(".ri-close-circle-fill") 
var menuIcon = document.querySelector(".menu__item");
var prevButton  = document.getElementsByClassName("prev");
var nextButton = document.getElementsByClassName("next");
var navItemChild = document.querySelector(".navbar__item--child");
var containerItem = document.querySelector("header#container");
var footerItem = document.querySelector("footer");
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    iconHidden.classList.add("hidden");
    hiddenScroll.classList.remove("hidden")
    hiddenScrollItem.classList.remove("hidden")
    itemSeperate.classList.remove("hidden")
    navbar.style.boxShadow = "5px 5px 10px #797979"
    navbar.style.zIndex = "1000"
  } else {
    navbar.classList.remove("sticky");
    iconHidden.classList.remove("hidden");
    hiddenScroll.classList.add("hidden")
    hiddenScrollItem.classList.add("hidden")
    itemSeperate.classList.add("hidden")
    navbar.style.boxShadow = "none"
    navbar.style.zIndex = "1000"
  }
}

function menuOpen() {
    // var menuAll = document.querySelector(".menu__all");
    if(menuIcon && menuAll.classList.contains("d-none")){
      menuAll.classList.remove("d-none")
      menuAll.classList.add("d-block")
      containerItem.classList.add("d-none")
      footerItem.classList.add("d-none")
    }
    else{
      menuAll.classList.add("d-none")
      menuAll.classList.remove("d-block")
      containerItem.classList.remove("d-none")
      footerItem.classList.remove("d-none")
    }
}

function closeMenu(){
  menuAll.classList.add("d-none");
  menuAll.classList.remove("d-block")
  containerItem.classList.remove("d-none")
  footerItem.classList.remove("d-none")
}



var closeItem = document.getElementsByClassName("ri-close-circle-line");
var overLay = document.querySelector(".overlay");

function closeFunction() {
  overLay.classList.remove("d-block")
  overLay.classList.add("d-none")
}

