document.addEventListener("DOMContentLoaded", function() {
    var photoCard = document.getElementById("photo-card");
    var artCard = document.getElementById("art-card");

    photoCard.addEventListener("mouseenter", function() {
        photoCard.style.backgroundColor = "lavender";
    });

    photoCard.addEventListener("mouseleave", function() {
        photoCard.style.backgroundColor = "white";
    });

    artCard.addEventListener("mouseenter", function() {
        artCard.style.backgroundColor = "lavender";
    });

    artCard.addEventListener("mouseleave", function() {
        artCard.style.backgroundColor = "white";
    });
});