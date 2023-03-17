const book = document.querySelector('.book');

// Изменение размера текста
const fonstSizes = [...document.querySelectorAll('.font-size')];

const changeFontSize = function () {
    fonstSizes.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            fonstSizes.forEach(elem => {
                elem.classList.remove('font-size_active');
            });
            elem.classList.add('font-size_active');
            if(elem.classList.contains('font-size_small')) {
                book.classList.add('book_fs-small');
                book.classList.remove('book_fs-big');
            } else if(elem.classList.contains('font-size_big')) {
                book.classList.add('book_fs-big');
                book.classList.remove('book_fs-small');
            } else {
                book.classList.remove('book_fs-small');
                book.classList.remove('book_fs-big');
            }
        });
    });
}
changeFontSize();

// Изменение цвета текста
const textcolors = [...document.querySelectorAll('.text_color')];

const changeTextColors = function () {
    textcolors.forEach(color => {
        color.addEventListener('click', (event) => {
            event.preventDefault();
            textcolors.forEach(elem => {
                elem.classList.remove('color_active');
            })
            color.classList.add('color_active');

            if(color.classList.contains('text_color_black')) {
                book.classList.add('book_color-black');
                book.classList.remove('book_color-whitesmoke');
                book.classList.remove('book_color-gray');
            } else if(color.classList.contains('text_color_gray')) {
                book.classList.add('book_color-gray');
                book.classList.remove('book_color-black');
                book.classList.remove('book_color-whitesmoke');
            } else {
                book.classList.add('book_color-whitesmoke');
                book.classList.remove('book_color-black');
                book.classList.remove('book_color-gray');
            }
        });
    });
}

changeTextColors();

// Изменение цвета фона
const bgColors = [...document.querySelectorAll('.bg_color')]

const changeBgColors = function () {
    bgColors.forEach(color => {
        color.addEventListener('click', (event) => {
            event.preventDefault();
            bgColors.forEach(elem => {
                elem.classList.remove('color_active');
            })
            color.classList.add('color_active');

            if(color.classList.contains('bg_color_black')) {
                book.classList.add('book_bg-black');
                book.classList.remove('book_bg-white');
                book.classList.remove('book_bg-gray');
            } else if (color.classList.contains('bg_color_gray')) {
                book.classList.add('book_bg-gray');
                book.classList.remove('book_bg-black');
                book.classList.remove('book_bg-white');
            } else {
                book.classList.add('book_bg-white');
                book.classList.remove('book_bg-black');
                book.classList.remove('book_bg-gray');
            }
        });
    });
}

changeBgColors();

// Решение от проверяющего
// const bookElement = document.getElementById("book");
// const controlElements = document.querySelector(".book__controls");

// controlElements.addEventListener("click", function (event) {
//   event.preventDefault();

//   const { size, textColor, bgColor } = event.target.dataset;

//   const elementClassArray = event.target.classList;
//   const activeControl = event.target
//     .closest(".book__control")
//     .querySelectorAll("a");

//   activeControl.forEach((element) => {
//     element.classList.remove(elementClassArray[0] + "_active");
//   });

//   event.target.classList.add(elementClassArray[0] + "_active");

//   function removePreviousClassName(className) {
//     for (value of bookElement.classList) {
//       if (value.includes(className)) {
//         bookElement.classList.remove(value);
//       }
//     }
//   }

//   if (size || event.target.className === "font-size font-size_active") {
//     removePreviousClassName("book_fs-");
//     bookElement.classList.add("book_fs-" + size);
//   }

//   if (textColor) {
//     removePreviousClassName("book_color-");
//     bookElement.classList.add("book_color-" + textColor);
//   }

//   if (bgColor) {
//     removePreviousClassName("book_bg-");
//     bookElement.classList.add("book_bg-" + bgColor);
//   }
// });