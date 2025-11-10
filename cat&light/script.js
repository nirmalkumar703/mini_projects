let lignt = document.getElementById("lightimg");
let cat = document.getElementById("catimg");
let onbtn = document.getElementById("on");
let offbtn = document.getElementById("off");
let imgbg = document.getElementById("imgbg");
let heading = document.getElementById("heading");
let state = document.getElementById("state");



function offfunction() {
    lignt.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    cat.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    onbtn.style.backgroundColor = "green";
    offbtn.style.backgroundColor = "darkgray";
    imgbg.style.backgroundColor = "black";
    heading.style.color = "black";
    state.textContent = "Light Is Off";
}

function onfunction() {
    lignt.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    cat.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    onbtn.style.backgroundColor = "darkgray";
    offbtn.style.backgroundColor = "red";
    imgbg.style.backgroundColor = "rgb(134, 86, 13)";
    heading.style.color = "aqua";
    state.textContent = "Light Is On";
}
