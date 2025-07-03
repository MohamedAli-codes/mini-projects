// var contentContainers = document.getElementsByClassName("content-container");
// document.addEventListener("scroll", (e) => {
//   for (const element of contentContainers) {
//     element.classList.add("show");
//   }
// });

var contentContainers = document.getElementsByClassName("content-container");

// copilot
// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return rect.top < window.innerHeight && rect.bottom > 0;
// }

// document.addEventListener("scroll", () => {
//   for (const element of contentContainers) {
//     if (isInViewport(element)) {
//       element.classList.add("show");
//     }
//   }
// });

// // Trigger on load as well
// window.addEventListener("DOMContentLoaded", () => {
//   for (const element of contentContainers) {
//     if (isInViewport(element)) {
//       element.classList.add("show");
//     }
//   }
// });

window.addEventListener("scroll", showBoxes);
window.addEventListener("load", showBoxes);

function showBoxes() {
  const triggerBottom = window.innerHeight * 0.8; //hna hwa 2ll inner height shwya
  for (const element of contentContainers) {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < triggerBottom) {
      element.classList.add("show");
    } else {
      element.classList.remove("show");
    }
  }
}
