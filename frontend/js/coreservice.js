const images = [
  "images/education-success.jpg",
  "images/successful-student.jpg",
  "images/happy-graduates.jpg"
];

let currentIndex = 0;
const imgElement = document.querySelector(".image-box img");

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  imgElement.style.opacity = 0;
  setTimeout(() => {
      imgElement.src = images[currentIndex];
      imgElement.style.opacity = 1;
  }, 500);
}

setInterval(changeImage, 4000);
