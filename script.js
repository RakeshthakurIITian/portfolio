const sliderInput = document.getElementById('slider');
const body = document.querySelector('body');

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
    body.classList.toggle('dark');
}

sliderInput.addEventListener('change', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
});