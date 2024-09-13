const menuItems = document.querySelectorAll(".header__navigation__menu__item");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
