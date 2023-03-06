const menuLinks = [...document.querySelectorAll(".menu__link")];
const menuSub = [...document.querySelectorAll(".menu_sub")];
const menuItems = [...document.querySelectorAll(".menu__item")];

menuLinks.forEach((link) => {
    link.onclick = () => {
        const menu = link.closest(".menu_sub");
        if(menu) {
            menu.classList.toggle("menu_active");
        }
        return false;
    }
})