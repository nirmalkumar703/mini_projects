let imageElement = document.getElementById("image");
let msg = document.getElementById("warningMessage");
let wth = document.getElementById("imageWidth");
let defaultImageWidth = 200;
imageElement.style.width = defaultImageWidth + "px";
wth.textContent = defaultImageWidth + "px";

console.log("start");

function increment() {

    console.log("in", defaultImageWidth);
    if (defaultImageWidth > 295) {
        console.log("in-ef", defaultImageWidth);
        msg.textContent = "Too big, decrease the size of the image";
    } else if (defaultImageWidth < 100) {
        console.log("in-elf", defaultImageWidth);
        msg.textContent = "Can't visible, Increase the size of the image"
    } else {
        defaultImageWidth = defaultImageWidth + 5;
        console.log("in-el", defaultImageWidth);
        imageElement.style.width = defaultImageWidth + "px";
        wth.textContent = defaultImageWidth + "px";
        msg.textContent = "";
    }
}


function decrement() {
    console.log("de", defaultImageWidth);

    if (defaultImageWidth < 105) {

        console.log("de-if", defaultImageWidth);
        msg.textContent = "Can't visible, Increase the size of the image";
    } else if (defaultImageWidth > 300) {
        console.log("de-elf", defaultImageWidth);
        msg.textContent = "Too big, decrease the size of the image";
    } else {
        defaultImageWidth = defaultImageWidth - 5;
        console.log("de-el", defaultImageWidth);
        imageElement.style.width = defaultImageWidth + "px";
        msg.textContent = "";
        wth.textContent = defaultImageWidth + "px";

    }
}
