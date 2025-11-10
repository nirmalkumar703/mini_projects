let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let rl = document.getElementById("rl");
let yl = document.getElementById("yl");
let gl = document.getElementById("gl");

function red() {
    b1.style.backgroundColor = "#cf1124";
    rl.style.backgroundColor = "#cf1124";

    b2.style.backgroundColor = "#1f1d41";
    yl.style.backgroundColor = "#4b5069";
    b3.style.backgroundColor = "#1f1d41";
    gl.style.backgroundColor = "#4b5069";
}

function yellow() {
    b2.style.backgroundColor = "#f7c948";
    yl.style.backgroundColor = "#f7c948";

    b1.style.backgroundColor = "#1f1d41";
    rl.style.backgroundColor = "#4b5069";
    b3.style.backgroundColor = "#1f1d41";
    gl.style.backgroundColor = "#4b5069";
}

function green() {
    b3.style.backgroundColor = "#199473";
    gl.style.backgroundColor = "#199473";

    b1.style.backgroundColor = "#1f1d41";
    rl.style.backgroundColor = "#4b5069";
    b2.style.backgroundColor = "#1f1d41";
    yl.style.backgroundColor = "#4b5069";
}
