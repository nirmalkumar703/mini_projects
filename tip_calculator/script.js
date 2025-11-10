let bill = document.getElementById("billAmount");
let tip_per = document.getElementById("percentageTip");
let tip_amo = document.getElementById("tipAmount");
let tot_amo = document.getElementById("totalAmount");
let emsg = document.getElementById("errorMessage");
let msg = "Please Enter a Valid Input"

function calculate() {

    if (bill.value.trim() === "" || tip_per.value.trim() === "") {
        emsg.textContent = msg;
    } else {

        let bil = bill.value;
        let tip_pe = tip_per.value;
        let tip_am = (parseInt(bil) / 100) * parseInt(tip_pe);
        tip_amo.value = tip_am;
        tot_amo.value = parseInt(bil) + tip_am;
        emsg.textContent = "";

    }
}
