var calculated = false;

function clearAll() {
    var scr = document.getElementById("screen");
    scr.value = "";
    calculated = false;
}

function getNumber(num) {
    var scr = document.getElementById("screen");

    if (calculated == true) {
        if (num == "+" || num == "-" || num == "/" || num == "*") {
            scr.value += num;
        }
        else {
            scr.value = num;
        }
    }
    else {
        scr.value += num;
    }
    calculated = false;
}

function getResult(num) {
    var scr = document.getElementById("screen");
    scr.value = eval(scr.value);
    calculated = true;
}
