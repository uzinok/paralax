window.onload = function () {
    document.addEventListener("mousemove", function(e) {
        e = e || event;
        let mountains = document.querySelector('.mountains'), clouds = document.querySelector('.clouds');
        mountains.style.transform = "translate(" + e.clientX * 0.01 + "px, " + e.clientY * 0.01 + "px)";
        clouds.style.transform = "translate(-" + e.clientX * 0.005 + "px, -" + e.clientY * 0.005 + "px)";
    })
};
