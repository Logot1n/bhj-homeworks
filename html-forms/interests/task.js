const interestUl = document.querySelector(".interests_main");
interestUl.addEventListener("change", (event) => {
    const interestItem = event.target.closest(".interest");
    const interestItemCheck = interestItem.querySelector(".interest__check");
    const interestItemUl = [...interestItem.querySelectorAll(".interests")];

    interestItemUl.forEach(item => {
        const childChecks = [...item.querySelectorAll(".interest__check")];
        childChecks.forEach(check => {
            if(interestItemCheck.checked) {
                check.checked = true;
            } else {
                check.checked = false;
            }
        });
    });
});