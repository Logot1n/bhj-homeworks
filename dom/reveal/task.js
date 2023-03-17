// const reveal = [...document.querySelectorAll('.reveal')];

// const inVisible = function (elem) {
//     const {top, bottom} = elem.getBoundingClientRect();
//     console.log(top, bottom);
//     if (bottom < 0 || top > window.innerHeight) {
//         return false;
//     }
//     return true;
// }

// document.addEventListener('scroll', () => {
//     reveal.forEach(el => {
//         if (inVisible(el)) {
//             el.classList.add('reveal_active');
//             console.log(inVisible(el, true));
//         } else {
//             el.classList.remove('reveal_active');
//             console.log(inVisible(el, false));
//         }
//     });
// });

// Замыкание
const inVisibleWithCoordinates = function (reveal) {
    return function() {
      reveal.forEach(el => {
        const { top, bottom } = el.getBoundingClientRect();
        console.log(top, bottom);
        if (bottom < 0 || top > window.innerHeight) {
          el.classList.remove('reveal_active');
        } else {
          el.classList.add('reveal_active');
        }
        console.log(el, el.classList.contains('reveal_active'));
      });
    };
  }

const reveal = [...document.querySelectorAll('.reveal')];
const inVisible = inVisibleWithCoordinates(reveal);
  
document.addEventListener('scroll', inVisible);


// Другое условие
// const { innerHeight } = window;
// const { top } = reveal.getBoundingClientRect();
// if (top < innerHeight && top > 0) {
//   reveal.classList.add("reveal_active");
// } else {
//   reveal.classList.remove("reveal_active");
// }