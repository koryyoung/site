var subBtn = document.getElementById("submit-btn")
var thanks = document.getElementById("thanks")
var form = document.getElementById("form-input")
var frm = document.getElementById("reset")

subBtn.addEventListener("click", function () {
    setTimeout(() => {
        thanks.style.opacity = "1";
        form.style.opacity = "0";
        frm.reset();
    }, 1000);
});

var imgs = document.querySelectorAll('#wsub-image-side img, #wsub-image-wide img');
var full = document.getElementById("wsub-full");

imgs.forEach(img => {
    img.addEventListener('click', function () {
        full.style.display = 'flex';
    });
});