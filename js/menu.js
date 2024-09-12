import menuItems from "./menuItems.js"



const nav = document.querySelector(".header__navigation__menu")


menuItems.forEach((obj)=>{
    const listItem = document.createElement("li")
    listItem.className= "header__navigation__menu__item";

    const link = document.createElement("a");
    link.href = "#"
    link.textContent = obj.header

    const image = document.createElement("img")
    image.src = "./materials/icons/Без названия (1).svg"
    image.alt = "menu__icon"
    image.className = "icon"

    link.appendChild(image)

    listItem.appendChild(link)
    const submenu = document.createElement("ul");
    submenu.className="header__navigation__submenu";

    obj.list.forEach(item=>{
        const submenuItem = document.createElement("li")
        const submenuLink = document.createElement("a")
        submenuLink.href = "#"
        submenuLink.textContent = item;
        submenuItem.appendChild(submenuLink);
        submenu.appendChild(submenuItem);
    })

    listItem.appendChild(submenu)

    nav.appendChild(listItem)

})




