import "./styles.css";
import next from "/images/next.png";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("/images/carousal-imgs", false, /\.(png|jpe?g|svg)$/)
);

const imageContainer = document.querySelector(".carousal-img");
let currentImageIndex = 0;
imageContainer.src = images[currentImageIndex];

const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

leftArrow.src = next;
rightArrow.src = next;

function forwardImageCarousal() {
  rightArrow.addEventListener("click", () => {
    currentImageIndex += 1;
    if (currentImageIndex > images.length - 1) {
      currentImageIndex = 0;
    }
    imageContainer.src = images[currentImageIndex];
  });
}

function backwardImageCarousal() {
  leftArrow.addEventListener("click", () => {
    currentImageIndex -= 1;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    }
    imageContainer.src = images[currentImageIndex];
  });
}

const addImageCarousalShiftTimer = (() => {
  setInterval(() => {
    currentImageIndex += 1;
    if (currentImageIndex > images.length - 1) {
      currentImageIndex = 0;
    }
    imageContainer.src = images[currentImageIndex];
  }, 5000);
})();

const carousalIconContainer = document.querySelector(
  ".carousal-icon-container"
);

const loadCarousalIcons = (() => {
  const carousalIcons = [];
  for (let i = 0; i < images.length; i++) {
    carousalIcons[i] = document.createElement("button");
    carousalIcons[i].classList.add("carousal-icon");
    carousalIcons[i].addEventListener("click", () => {
      imageContainer.src = images[i];
    });
    carousalIconContainer.appendChild(carousalIcons[i]);
  }
})();

forwardImageCarousal();
backwardImageCarousal();
