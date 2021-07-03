var closeface = document.querySelector(".closed");
var openface = document.querySelector(".open");


closeface.addEventListener("mouseover", function () {
    if (openface.classList.contains('open')) {
        openface.classList.add('active');
        closeface.classList.remove('active');
    }
})




openface.addEventListener("mouseout", function () {
    if (closeface.classList.contains('closed')) {
        closeface.classList.add('active');
        openface.classList.remove('active');
    }
})
