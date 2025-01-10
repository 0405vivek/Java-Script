const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentNumber = "";
let previousNumber = "";
let operation = null;

function updateDisplay() {
    display.value = currentNumber || previousNumber;

}

function appendData(number) {
    currentNumber += number;
    updateDisplay();
}

function selectoprator(ope) {
    if (currentNumber === "") return;

    previousNumber = currentNumber;
    operation = ope;
    currentNumber = "";

}

function calculate() {
    if(currentNumber === "" || previousNumber === "") return;

    let prv = parseFloat(previousNumber);
    let cur = parseFloat(currentNumber);
    let result ;

    switch (oprater) {
        case "+ ":
            result = prv + cur;
            break;
    
        case "-":
            result = prv - cur;
            break;
        
        case "*":
            result = prv * cur;
            break;

        case "/":
            result = prv / cur;
            break;

        default:
            break;
    }
    currentNumber = result.toString();
    previousNumber = "";
    operation = null;
    updateDisplay();
} 

function clear() {
    
    currentNumber = "";
    previousNumber = "";
    operation = null;
    updateDisplay();

}

buttons.forEach((button) => {
    
    button.addEventListener('click', () => {

        let value = button.textContent;

        if(!isNaN(value) || value === ".") {
           appendData(value);

        } else if (value === "=") {
            calculate();
        } else if(value === "C"){
            clear();    
        }else{
            selectoprator(value);
        }

    }) 
    
});