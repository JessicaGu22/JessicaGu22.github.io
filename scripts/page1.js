document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById('myModal');
    var closeBtn = document.getElementsByClassName('close')[0];

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
    modal.style.display = "block";
});



