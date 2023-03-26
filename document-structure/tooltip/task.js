const tooltipsLinks = [...document.querySelectorAll('.has-tooltip')];

tooltipsLinks.forEach(tooltipLink => {
    tooltipLink.addEventListener('click', (event) => {
        event.preventDefault();
        
        // Запрет на открытие 2 подсказок одновременно
        const tooltipActive = document.querySelector('.tooltip');
        if(tooltipActive) {
            tooltipActive.remove();
        }

        // Добавление подсказки
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = tooltipLink.getAttribute('title');
        tooltip.classList.add('tooltip_active');

        document.addEventListener('click', (event) => {
            if (!event.target.classList.contains('has-tooltip')) {
              tooltip.classList.remove('tooltip_active');
            }
        })

        // Установка позиционирования элемента с подсказкой
        const coordinates = tooltipLink.getBoundingClientRect();
        const coordinatesTop = coordinates.top + window.pageYOffset;
        const coordinatesLeft = coordinates.left + window.pageXOffset;

        tooltip.style.top = coordinatesTop + coordinates.height + 'px';
        tooltip.style.left = coordinatesLeft + 'px';
    
        document.body.appendChild(tooltip);
    });
});