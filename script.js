function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function backspace() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
}

function calculate() {
    let display = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(display);
    } catch {
        document.getElementById("display").value = "Error";
    }
}
