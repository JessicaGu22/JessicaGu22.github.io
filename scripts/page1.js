document.addEventListener("DOMContentLoaded", function () {

    var modal = document.getElementById('myModal');
    var closeBtn = document.getElementsByClassName('close')[0];

    closeBtn.onclick = function () {
        modal.style.display = "none";
    }
    modal.style.display = "block";

    document.getElementById('themeToggle').addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });

    let i = 0;
    const text = "Welcome to my website!";
    function typing() {
        if (i < text.length) {
            document.getElementById("typed").innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 100);
        }
    }
    typing();

    const topBtn = document.getElementById("topBtn");

    window.onscroll = function () {
        topBtn.style.display = window.scrollY > 200 ? "block" : "none";
    };

    topBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


});



