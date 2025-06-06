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


const hobbies = ['Photography', 'Travel', 'Reading'];
let hasVoted = sessionStorage.getItem('hasVoted') === 'true';

function loadVotes() {
    hobbies.forEach(hobby => {
        const count = localStorage.getItem(`votes-${hobby}`) || 0;
        document.getElementById(`count-${hobby}`).textContent = count;
    });
}

function vote(hobby) {
    if (hasVoted) {
        document.getElementById("vote-message").textContent = "You’ve already voted this session!";
        return;
    }

    let count = parseInt(localStorage.getItem(`votes-${hobby}`) || 0);
    count++;
    localStorage.setItem(`votes-${hobby}`, count);
    document.getElementById(`count-${hobby}`).textContent = count;

    document.getElementById("vote-message").textContent = "Thanks for voting!";

    hasVoted = true;
    sessionStorage.setItem('hasVoted', 'true');
}

document.addEventListener("DOMContentLoaded", loadVotes);



