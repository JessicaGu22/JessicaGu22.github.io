document.addEventListener("DOMContentLoaded", function() {
    var gameCard = document.getElementById("game-card");
    var artCard = document.getElementById("art-card");

    gameCard.addEventListener("mouseenter", function() {
        gameCard.style.backgroundColor = "lavender";
    });

    gameCard.addEventListener("mouseleave", function() {
        gameCard.style.backgroundColor = "white";
    });

    artCard.addEventListener("mouseenter", function() {
        artCard.style.backgroundColor = "lavender";
    });

    artCard.addEventListener("mouseleave", function() {
        artCard.style.backgroundColor = "white";
    });
});