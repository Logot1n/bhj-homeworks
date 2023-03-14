const rotatorCases = [...document.querySelectorAll('.rotator__case')];
const rotator = document.querySelector('.rotator');

let activeIndex = 0;

const toggle = function() {
    rotatorCases.forEach((caseEl) => {
        caseEl.classList.remove('rotator__case_active');
    })
    activeIndex = (activeIndex + 1) % rotatorCases.length;
    const nextCase = rotatorCases[activeIndex];
    nextCase.classList.add('rotator__case_active');

    // Дополнительное задание
    const textColor = nextCase.dataset.color;
    nextCase.style.color = textColor;
    const textSpeed = nextCase.dataset.speed;
    const interval = parseInt(textSpeed) || 1000;
    clearInterval(rotatorCases.intervalId)
    rotatorCases.intervalId = setInterval(toggle, interval);
}

toggle()