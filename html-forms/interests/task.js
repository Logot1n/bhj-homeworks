const interestContainer = document.querySelector(".interests_main");
interestContainer.addEventListener("change", (event) => {
  const interestItem = event.target.closest(".interest");
  const interestItemCheck = interestItem.querySelector(".interest__check");
  const interestItemUl = [...interestItem.querySelectorAll(".interests")];

  interestItemUl.forEach((item) => {
    const childChecks = [...item.querySelectorAll(".interest__check")];
    childChecks.forEach((check) => {
      if (interestItemCheck.checked) {
        check.checked = true;
      } else {
        check.checked = false;
      }
    });
  });

  const allChecks = [...interestContainer.querySelectorAll(".interest__check")];
  allChecks.reverse().forEach((check) => {
    const checksInUl = check.closest(".interest").querySelector("ul");
    if (!checksInUl) return;
    const totalChecksInUl =
      checksInUl.querySelectorAll(".interest__check").length;
    const activeChecksInUl = checksInUl.querySelectorAll(":checked").length;
    if (totalChecksInUl === activeChecksInUl) {
      check.checked = true;
      check.indeterminate = false;
      return;
    }
    if (!activeChecksInUl) {
      check.checked = false;
      check.indeterminate = false;
      return;
    }
    check.indeterminate = true;
  });
});
