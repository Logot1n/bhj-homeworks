const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal__close');

let modalClosed = false;
function closeModal() {
    modal.classList.remove('modal_active');
    document.cookie = 'modalClosed=true';
    modalClosed = true;
}
modalCloseButton.addEventListener('click', closeModal);

function checkClosedModal() {
    const pairs = document.cookie.split('; ');
    const modalClosedCookie = pairs.find(i => i.startsWith('modalClosed='));
    if(modalClosedCookie) {
        modalClosed = modalClosedCookie.split('=')[1] === 'true';
    } else {
        modalClosed = false;
    }

    if(!modalClosed) {
        modal.classList.add('modal_active');
        document.cookie = 'modalClosed=false';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    checkClosedModal();
})

window.addEventListener('beforeunload', () => {
    if(!modalClosed) {
        document.cookie = 'modalClosed=false'
    }
})
