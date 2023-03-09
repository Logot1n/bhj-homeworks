const value = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const dropItems = document.querySelectorAll('.dropdown__item');

// Переназначаем название выбранного элемента списка в зависимости от кликнутого пункта списка 
// и запрещаем переход по ссылке
const currentValue = function() {
    dropItems.forEach((item) => {
        item.addEventListener('click', (event) => {
            value.textContent = item.textContent;
            list.classList.remove('dropdown__list_active');
            event.preventDefault(); 
        })
    })
};

// Выводим список или убираем его при клике на кнопку
const activeList = function() {
    list.classList.toggle('dropdown__list_active');
    currentValue();
}

// Добавляем обработчик события на кнопку dropdown__value (переменная value)
value.addEventListener('click', activeList);