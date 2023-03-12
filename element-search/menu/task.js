// Находим все саб меню
const subMenus = [...document.querySelectorAll(".menu_sub")];

subMenus.forEach((subMenu) => {
  // Находим родителя перебираемого меню и ищем у него все ссылки
  const menuItem = subMenu.closest(".menu__item");
  const subMenuLinks = menuItem.querySelectorAll(".menu__link");
  // Перебираем ссылки и при нажатие на них, если ссылка находится внутри всплывающего меню - переход разрешен,
  // если нет, то переход запрещен
  subMenuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (subMenu.contains(e.target)) {
        return;
      }
      e.preventDefault();
      // Проверка на открытие двух всплывающих окон
      const activeMenu = document.querySelector(".menu_sub_active");
      if (activeMenu && activeMenu !== subMenu) {
        activeMenu.classList.remove("menu_sub_active");
      }
      subMenu.classList.toggle("menu_sub_active");
    });
  });
});