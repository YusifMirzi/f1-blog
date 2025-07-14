// // Typewriter Effect for Intro
// const typewriterText = "Everything you need to know about the Baku Grand Prix 🇦🇿";
// const typewriterTarget = document.getElementById("typewriter");
// let index = 0;

// function typeEffect() {
//   if (index < typewriterText.length) {
//     typewriterTarget.innerHTML += typewriterText.charAt(index);
//     index++;
//     setTimeout(typeEffect, 40);
//   }
// }
// window.addEventListener("load", typeEffect);

// // Toggle More Info in Blog Cards
// const toggleButtons = document.querySelectorAll(".toggle-info");

// toggleButtons.forEach(button => {
//   button.addEventListener("click", () => {
//     const content = button.previousElementSibling;
//     content.classList.toggle("expanded");
//     button.textContent = content.classList.contains("expanded") ? "Show Less ▲" : "Read More ▼";
//   });
// });

// // Sticky Header Effect
// const header = document.querySelector("header");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 80) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const showMoreBtn = document.getElementById("show-more-btn");
//   const extraContent = document.getElementById("extra-content");

//   if (showMoreBtn && extraContent) {
//     showMoreBtn.addEventListener("click", () => {
//       extraContent.classList.toggle("visible");
//       showMoreBtn.textContent = extraContent.classList.contains("visible") ? "Show Less" : "Show More";
//     });
//   }
// });
