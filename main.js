const adapt_btn = document.querySelector(".adapt_btn");
const adapt_nav = document.querySelector(".adapt_nav");
const overlay = document.querySelector(".overlay");

overlay.addEventListener("click", function () {
  console.log("click");
});
adapt_btn.addEventListener("click", function () {
  adapt_nav.classList.toggle("play");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", function () {
  adapt_nav.classList.remove("play");
  overlay.classList.remove("active");
});
