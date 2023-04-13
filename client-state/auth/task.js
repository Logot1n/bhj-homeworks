const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const signin = document.getElementById('signin');
const logoutBtn = document.getElementById('logout__btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.onload = function() {
        if(xhr.status === 201) {
            const response = JSON.parse(xhr.response);
            if(response.success) {
                const userId = response.user_id;
                localStorage.setItem('userId', userId);
                signin.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                welcome.querySelector('#user_id').textContent = userId;
                logoutBtn.classList.add('logout__btn_active');
            } else {
                alert('Неверный логин или пароль');
            }
        } else if (xhr.status >= 400) {
            setTimeout(() => {
                return alert('Что-то пошло не так');
            }, 1000)
        }
    }        
    xhr.send(formData);
});

window.addEventListener('DOMContentLoaded', () => {
    const userId = localStorage.getItem('userId');
    if(userId) {
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        welcome.querySelector('#user_id').textContent = userId;
    }
});

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('userId');
    signin.classList.add('signin_active');
    welcome.classList.remove('welcome_active');
    logoutBtn.classList.remove('logout__btn_active')    
})