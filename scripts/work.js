let currentIndex = 0;

function moveSlides(n) {
  const slides = document.querySelectorAll('.slides img');
  currentIndex = (currentIndex + n + slides.length) % slides.length;
  document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
}
