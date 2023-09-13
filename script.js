// Initializing variables for calculator display
let firstOperand = "";
let currentOperator = "";
let secondOperand = "";
let result = "";

// Displaying variables on the calculator display
document.getElementById("first-display").textContent = 0;
document.getElementById("operator-display").textContent = currentOperator;
document.getElementById("second-display").textContent = secondOperand;

// Functions for the number buttons
function numberZero() {
    const number = document.getElementById("first-display");
    number.textContent = firstOperand += "0";
}

function numberOne() {
    const number = document.getElementById("first-display");
    number.textContent = firstOperand += "1";
}

function numberTwo() {
    const number = document.getElementById("first-display");
    number.textContent = firstOperand += "2";
}

function numberThree() {
    const number = document.getElementById("first-display");
    number.textContent = firstOperand += "3";
}

function numberFour() {
    const number = document.getElementById("first-display");
    number.textContent = firstOperand += "4";
}

function numberFive() {
    const number = document.getElementById("first-display");
    number.textContent = firstOperand += "5";
}

function numberSix() {
    const number = document.getElementById("first-display");
    number.textContent = firstOperand += "6";
}

function numberSeven() {
    const number = document.getElementById("first-display");
    number.textContent = firstOperand += "7";
}

function numberEight() {
    const number = document.getElementById("first-display");
    number.textContent = firstOperand += "8";
}

function numberNine() {
    const number = document.getElementById("first-display");
    number.textContent = firstOperand += "9";
}

function decimal() {
    const number = document.getElementById("first-display");
    number.textContent = firstOperand += ",";
}

//Functions for the operator buttons
function buttonAdd() {
    currentOperator = "";
    const operator = document.getElementById("operator-display");
    operator.textContent = currentOperator += "+";
}

// Clear function
function clearAll() {
    firstOperand = "";
    currentOperator = "";
    secondOperand = "";
    result = "";
    document.getElementById("first-display").textContent = 0;
    document.getElementById("operator-display").textContent = currentOperator;
    document.getElementById("second-display").textContent = secondOperand;
}

// Functions for various operators
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function modulus(x, y) {
    return x % y;
}

function sqrt(x) {
    return Math.sqrt(x);
}

// Operate initialization logic
function operate(firstOperand, currentOperator, secondOperand) {
    if (currentOperator == "+") {
        return result = add(firstOperand, secondOperand);
    } else if (currentOperator == "-") {
        return result = subtract(firstOperand, secondOperand);
    } else if (currentOperator == "*") {
        return result = multiply(firstOperand, secondOperand);
    } else if (currentOperator == "/") {
        return result = divide(firstOperand, secondOperand);
    } else if (currentOperator == "%") {
        return result = modulus(firstOperand, secondOperand);
    } else if (currentOperator == "√") {
        return result = sqrt(firstOperand);
    } else {
        alert("Error, something went wrong while calculating!")
    }
}