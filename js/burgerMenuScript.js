const burger = document.querySelector(".header__hammenu")
const nav = document.querySelector(".header__navigation")


const menuItems = document.querySelectorAll(".header__navigation__menu__item");

menuItems.forEach((item)=> {
    item.addEventListener("click", ()=>{
        document.querySelector("header__navigation__submenu").classList.add("active")
    })
})


console.log(nav);

burger.addEventListener("click", ()=>{
    burger.classList.toggle("header__hammenu__active")



   nav.classList.toggle("header__navigation--active");
})