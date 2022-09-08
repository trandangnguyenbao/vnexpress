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


var titleLoginActive = document.querySelector("ul.title li.title__item--login h5");
var titleCreateActive = document.querySelector("ul.title li.title__item--account h5");
var closeItem = document.getElementsByClassName("ri-close-circle-line");
var overLay = document.querySelector(".overlay");
var loginButton = document.querySelector("li.login__button");
var loginForm = document.querySelector(".login");
var accountCreate = document.querySelector(".createform");


console.log(titleCreateActive)
function closeFunction() {
  overLay.classList.remove("d-block")
  overLay.classList.add("d-none")
  loginForm.classList.remove("d-block")
  loginForm.classList.add("d-none")
  accountCreate.classList.remove("d-block")
  accountCreate.classList.add("d-none")
}


function loginFunction() {
  if(overLay.classList.contains("d-none") && loginForm.classList.contains("d-none")){
    overLay.classList.remove("d-none")
    overLay.classList.add("d-block")
    loginForm.classList.remove("d-none")
    loginForm.classList.add("d-block")
    accountCreate.classList.remove("d-block")
    accountCreate.classList.add("d-none")
    titleCreateActive.classList.remove("active")
    titleLoginActive.classList.add("active")
  }
  else if (overLay.classList.contains("d-block") && loginForm.classList.contains("d-none") && accountCreate.classList.contains("d-block")){
    loginForm.classList.remove("d-none")
    loginForm.classList.add("d-block")
    accountCreate.classList.remove("d-block")
    accountCreate.classList.add("d-none")
    titleCreateActive.classList.remove("active")
    titleLoginActive.classList.add("active")
  }
}

function createForm() {
  if(overLay.classList.contains("d-block") && loginForm.classList.contains("d-block") && accountCreate.classList.contains("d-none")){
    loginForm.classList.remove("d-block")
    loginForm.classList.add("d-none")
    accountCreate.classList.remove("d-none")
    accountCreate.classList.add("d-block")
    titleLoginActive.classList.remove("active")
    titleCreateActive.classList.add("active")
  }
  // else if(overLay.classList.contains("d-block") && loginForm.classList.contains("d-none") && accountCreate.classList.contains("d-block")){
  //   loginForm.classList.remove("d-none")
  //   loginForm.classList.add("d-block")
  //   accountCreate.classList.remove("d-block")
  //   accountCreate.classList.add("d-none")
  //   titleCreateActive.classList.remove("active")
  //   titleLoginActive.classList.add("active")
  // }
}

var headerItem = document.querySelector(".header");

if(screen.width > 120){
  headerItem.classList.remove("container");
  headerItem.classList.add("container-fluid");
}
else{
  headerItem.classList.remove("container-fluid");
  headerItem.classList.add("container")
}


var headerChild = document.querySelector(".noichua");

if(screen.width < 989){
  headerChild.classList.remove("container")
  headerChild.classList.add("container-fluid")
}
