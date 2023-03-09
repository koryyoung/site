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


function fullPic() {
var images = document.querySelectorAll(".work-sub img");
var full = document.getElementById("wsub-full");
var gOneS = document.getElementById("g1-s");
var gTwoS = document.getElementById("g2-s");
var gThrS = document.getElementById("g3-s");
var gFouS = document.getElementById("g4-s");
var gOneL = document.getElementById("g1-l");
var gTwoL = document.getElementById("g2-l");
var gThrL = document.getElementById("g3-l");
var gFouL = document.getElementById("g4-l");

images.forEach(img => {
    img.addEventListener("click", function () {
        full.style.display = "flex";
    });
});

gOneS.addEventListener("click", function () {
    gOneL.style.display = "flex"
});

gTwoS.addEventListener("click", function () {
    gTwoL.style.display = "flex"
});

gThrS.addEventListener("click", function () {
    gThrL.style.display = "flex"
});

gFouS.addEventListener("click", function () {
    gFouL.style.display = "flex"
});

full.addEventListener("click", function () {
    full.style.display = "none"
    gOneL.style.display = "none"
    gTwoL.style.display = "none"
    gThrL.style.display = "none"
    gFouL.style.display = "none"
});

}