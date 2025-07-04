document.addEventListener('DOMContentLoaded', () => {
    // 轮播逻辑
    let index = 0;
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    const showSlide = () => {
        slides.forEach((s, i) => s.style.display = i === index ? 'block' : 'none');
    };

    if (prevBtn && nextBtn && slides.length > 0) {
        prevBtn.onclick = () => {
            index = (index - 1 + slides.length) % slides.length;
            showSlide();
        };

        nextBtn.onclick = () => {
            index = (index + 1) % slides.length;
            showSlide();
        };

        showSlide();
    }

    // fade-in 滚动渐显逻辑
    const fadeEls = document.querySelectorAll('.fade-in');

    function checkFade() {
        const triggerBottom = window.innerHeight * 0.9;
        fadeEls.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < triggerBottom) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkFade);
    checkFade();  // 页面加载时立即检查一遍
});



