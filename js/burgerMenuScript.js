const burger = document.querySelector(".header__hammenu")
const nav = document.querySelector(".header__navigation")


const menuItems = document.querySelectorAll(".header__navigation__menu__item");

menuItems.forEach((item)=> {
    item.addEventListener("click", ()=>{
       const submenu = document.querySelector("header__navigation__submenu")
       submenu.classList.add("active")
    })
})


burger.addEventListener("click", ()=>{
    burger.classList.toggle("header__hammenu__active")
    document.body.classList.toggle("ovrlwHidden")
   nav.classList.toggle("header__navigation--active");
})