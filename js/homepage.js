// Scroll down on click
var scrollDown = document.getElementById("scroll-down")
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

scrollDown.addEventListener("click", function () {
    if (screen.width <= 428) {
        window.scrollTo(0, vh / 2)
    }
    else {
        window.scrollTo(0, vh);
    }
})

// Hide & reveal nav on scroll, wait for opening animation
var navHide = document.getElementById("navbar")

setTimeout(function () {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "-90px";
        } else {
            document.getElementById("navbar").style.top = "-180px";
        }
        prevScrollpos = currentScrollPos;
    }
}, 3500);

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

// Disable scroll on page load for 5s

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
    setTimeout(function () {
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
        window.removeEventListener('touchmove', preventDefault, wheelOpt);
        window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    }, 4000);
}
