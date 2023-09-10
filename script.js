// Initializing variables for calculator display
let firstNumber = 0;
let operator = "";
let secondNumber = 0;

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
function operate(firstNumber, operator, secondNumber) {
    if (operator == "+") {
        return add(firstNumber, secondNumber);
    } else if (operator == "-") {
        return subtract(firstNumber, secondNumber);
    } else if (operator == "*") {
        return multiply(firstNumber, secondNumber);
    } else if (operator == "/") {
        return divide(firstNumber, secondNumber);
    } else if (operator == "%") {
        return modulus(firstNumber, secondNumber);
    } else if (operator == "√") {
        return sqrt(firstNumber);
    } else {
        alert("Error, something went wrong while calculating!")
    }
}