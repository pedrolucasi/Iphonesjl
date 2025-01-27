

const images = document.querySelectorAll('.image-container img');
let currentImage = 0;

function changeImage() {
  images[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add('active');
}

setInterval(changeImage, 2000); // Altera a imagem a cada 2 segundos
