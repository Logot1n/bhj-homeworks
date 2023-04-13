const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal__close');

modal.classList.add('modal_active');

function closeModal() {
    modal.classList.remove('modal_active');
    document.cookie = 'modalClosed=true';
}
modalCloseButton.addEventListener('click', closeModal);

function checkClosedModal() {
    const pairs = document.cookie.split('; ');
    const modalClosed = pairs.find(i => i.startsWith('modalClosed=true'));
    if(!modalClosed) {
        modal.classList.add('modal_active');
        document.cookie = 'modalClosed=false';
    } else {
        document.cookie = 'modalClosed=true';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    checkClosedModal();
})


// Я не знаю, у меня почему-то куки не сохраняются.