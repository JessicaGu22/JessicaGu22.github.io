const btn = document.querySelector('.toggle-btn');

btn.addEventListener('click', function() {
    if (btn.textContent === 'Show More') {
        btn.textContent = 'Show Less';
    } else {
        btn.textContent = 'Show More';
    }
});