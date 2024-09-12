document.addEventListener("DOMContentLoaded", function () {
    const isMobile = window.matchMedia("(max-width:900px)").matches;

    if (isMobile) {
        const menuItems = document.querySelectorAll(".header__navigation__menu__item");

        menuItems.forEach(item => {
            item.addEventListener("click", function (event) {
                const submenu = this.querySelector(".header__navigation__submenu");

                if (submenu) {
                    const isVisible = submenu.style.display === "block";
                    submenu.style.display = isVisible ? "none" : "block";
                    event.preventDefault();
                }
            });
        });
    }
});