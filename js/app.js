let carouselDom = document.querySelector(".carousel");
let SliderDom = carouselDom.querySelector(".carousel .list");
let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
let timeRunning = 2200;
let timeAutoNext = 5000;

// Function to show the next slide
function showNextSlide() {
  let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
  let thumbnailItemsDom = document.querySelectorAll(
    ".carousel .thumbnail .item"
  );

  SliderDom.appendChild(SliderItemsDom[0]);
  thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
  carouselDom.classList.add("next");

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
  }, timeRunning);
}

// Set up auto-next functionality
let runNextAuto = setInterval(showNextSlide, timeAutoNext);

// Additional code for window.onload if needed
window.onload = function () {
  window.scrollTo(0, 0);
};
