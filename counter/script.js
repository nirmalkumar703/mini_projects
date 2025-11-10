let num = document.getElementById("innum");


function decrement() {
    let st = parseInt(document.getElementById("innum").textContent);
    let newst = st - 1;
    num.textContent = newst;
    if (newst > 0) {
        num.style.color = "green";
    } else if (newst < 0) {
        num.style.color = "red";
    } else {
        num.style.color = "black";
    }
}

function increment() {
    let st = parseInt(document.getElementById("innum").textContent);

    let newst = st + 1;
    num.textContent = newst;
    if (newst > 0) {
        num.style.color = "green";
    } else if (newst < 0) {
        num.style.color = "red";
    } else {
        num.style.color = "black";
    }
}

function reset() {
    let newst = 0;
    num.textContent = newst;
    num.style.color = "black";
}
