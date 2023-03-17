const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.getElementById('chat-widget__input');
const messages = document.getElementById('chat-widget__messages');

const date = new Date();
let hours = String(date.getHours()).padStart(2, '0');
let minutes = String(date.getMinutes()).padStart(2, '0');

// Открытие чата
chatWidget.addEventListener('click', function() {
    chatWidget.classList.add('chat-widget_active');;
    resetTimer();
});

// Функция ответа от робота-грубияна
const robotResponse = function() {
    // Создаем массив ответов от робота-грубияна
    const robotResponses = [
        'Я ничего не знаю',
        'Я ничего не понимаю',
        'Я не хочу отвечать =/',
        'Ответ найдете в Google',
        'ЛЯ-ЛЯ-ЛЯ',
        'БЛА-БЛА-БЛА',
        'OMAEWA MOU SHINDEIRU',
        'NANI???',
        'Ой, всё...',
        'Всё давай, мне некогда отвечать',
        'НЫЫЫЫЫЫААААА'
    ]

    const randomIndexResponse = Math.floor(Math.random() * robotResponses.length);
    const randomResponse = robotResponses[randomIndexResponse];
    setTimeout(() => {
        messages.innerHTML += `
            <div class="message">
                <div class="message__time">${hours}:${minutes}</div>
                <div class="message__text">${randomResponse}</div>
            </div>
        `;
        scrollToLastMessage();
    }, 1000)
}

// Отправка сообщения
chatWidgetInput.addEventListener('keydown', function(event) {
    if(event.key === 'Enter' && chatWidgetInput.value.trim() !== '') {
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${hours}:${minutes}</div>
                <div class="message__text">${chatWidgetInput.value}</div>
            </div>
        `;
        chatWidgetInput.value = '';
        scrollToLastMessage()
        // Робот нам отвечает
        setTimeout(robotResponse, 1000);
        resetTimer();
    }
});

// Функция скроллинга до последнего сообщения 
function scrollToLastMessage() {
    const lastMessage = messages.lastElementChild;
    lastMessage.scrollIntoView({ behavior: 'smooth' });
}

let timerId = 0;

// Таймер ожидания ответа от робота-грубияна
const startTimer = function() {
    setInterval(() => {
        timerId++;
        if(timerId === 30 && chatWidget.classList.contains('chat-widget_active')) {
            robotSendQuestion();
            resetTimer();
        }
    }, 1000)
}

// Сброс таймера
const resetTimer = function() {
    timerId = 0;
}

// Сообщение от робота при простое более 30 секунд
const robotSendQuestion = function() {
    const robotQuestions = [
        'Вы всё еще тут?',
        'Вы всё еще здесь?',
        'Работяга на месте?',
        'Ушли?'
    ];
    const randomIndexQuestions = Math.floor(Math.random() * robotQuestions.length);
    const randomQuestion = robotQuestions[randomIndexQuestions];
    setTimeout(() => {
        messages.innerHTML += `
            <div class="message">
                <div class="message__time">${hours}:${minutes}</div>
                <div class="message__text">${randomQuestion}</div>
            </div>
        `;
        scrollToLastMessage();
    }, 1000)
}

startTimer();