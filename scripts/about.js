document.addEventListener('DOMContentLoaded', () => {
    let index = 0;
    const slides = document.querySelectorAll('.slide');
    const showSlide = () => slides.forEach((s, i) => s.style.display = i === index ? 'block' : 'none');
    document.querySelector('.prev').onclick = () => { index = (index - 1 + slides.length) % slides.length; showSlide(); };
    document.querySelector('.next').onclick = () => { index = (index + 1) % slides.length; showSlide(); };
    showSlide();
});
