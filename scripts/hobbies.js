document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('#quiz .quiz-btn');
    const result = document.getElementById('quiz-result');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.dataset.answer === 'correct') {
                result.textContent = "🎉 Correct! I love traveling the most!";
                result.style.color = 'green';
            } else {
                result.textContent = "Oops! That's a good guess, but not quite right.";
                result.style.color = 'red';
            }
        });
    });
});
