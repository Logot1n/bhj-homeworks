const tooltipsLinks = [...document.querySelectorAll('.has-tooltip')];
const maxActiveTooltipCount = 1;

tooltipsLinks.forEach(tooltipLink => {
  tooltipLink.addEventListener('click', (event) => {
    event.preventDefault();

    // Добавление контейнера для подсказки
    const tooltipContainer = document.createElement('div');
    tooltipContainer.classList.add('tooltip_container');

    // Добавление подсказки
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = tooltipLink.getAttribute('title');
    tooltip.classList.add('tooltip_active');

    // Закрытие подсказки при повторном клике на ссылку
    const tooltipLinkActive = tooltipLink.querySelector('.tooltip_active');
    if(tooltipLinkActive) {
        tooltipLinkActive.remove();
        return;
    }
    
    // Запрет на открытие более 1-ой активной подсказки
    const openedTooltips = document.querySelectorAll('.tooltip');
        if (openedTooltips.length >= maxActiveTooltipCount) {
        openedTooltips[0].remove();
    }

    // Установка позиционирования элемента с подсказкой
    const coordinates = tooltipLink.getBoundingClientRect();
    const coordinatesTop = coordinates.top + window.pageYOffset;
    const coordinatesLeft = coordinates.left + window.pageXOffset;

    tooltip.style.top = coordinatesTop + coordinates.height + 'px';
    tooltip.style.left = coordinatesLeft + 'px';

    tooltipLink.appendChild(tooltip);
  });
});