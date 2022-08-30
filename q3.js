let randomColor1, randomColor2;
let hex = document.getElementById('hex');
let hexText;

function toHex(color) {
    return '#' + color.toString(16).padStart(6, '0');
}

function makeColor() {
    randomColor1 = Math.floor(Math.random() * 2 ** 24);
    hexText = toHex(randomColor1);
    hex.textContent = hexText;
    document.body.style.background = hexText;
}

function copyColor() {
    navigator.clipboard.writeText(hexText);
}

function makeGradient() {
    randomColor2 = Math.floor(Math.random() * 2 ** 24);
    hexText = "linear-gradient(45deg, " + toHex(randomColor1) + ", " + toHex(randomColor2) + ")";
    hex.textContent = hexText;
    document.body.style.background = hexText;
}

makeColor();
