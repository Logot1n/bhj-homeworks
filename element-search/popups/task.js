const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const modalCloseButtons = Array.from(document.querySelectorAll(".modal__close"));
const successButton = document.querySelector(".show-success");

modalMain.classList.add("modal_active");

modalCloseButtons.forEach(button => {
    button.onclick = function() {
        const modal = button.closest(".modal");
        modal.classList.remove("modal_active");
    };
});

successButton.onclick = function() {
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");
};