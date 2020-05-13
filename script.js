// (C) Ken Fyrstenberg, Epistemex, License: CC3.0-attr
var ctx = canvas.getContext('2d'),
    img = new Image(),
    play = false;

ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

img.onload = pixelate;

img.src = 'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/140272627-grooming-needs-senior-cat-632x475.jpg';

// MAIN function
function pixelate(v) {

    var size = (play ? v : blocks.value) * 0.01,

        w = canvas.width * size,
        h = canvas.height * size;


    ctx.drawImage(img, 0, 0, w, h);

    ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
}


blocks.addEventListener('change', pixelate, false);

window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
})();