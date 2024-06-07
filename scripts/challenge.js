const randomNumber = Math.floor(Math.random() * 100) + 1;
function checkGuess() {
    const guess = parseInt(document.getElementById("guessField").value);
    const message = document.getElementById("message");
    if (guess === randomNumber) {
        message.textContent = `Congratulations! You guessed the correct number ${randomNumber}!`;
    } else if (guess < randomNumber) {
        message.textContent = "Too low! Try again.";
    } else {
        message.textContent = "Too high! Try again.";
    }
}

