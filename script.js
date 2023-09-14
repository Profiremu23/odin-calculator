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
    if (currentOperator.length = 1) {
        const number = document.getElementById("second-display");
        number.textContent = secondOperand += "0";
    } else {
        const number = document.getElementById("first-display");
        number.textContent = firstOperand += "0";
    }
}

function numberOne() {
    if (currentOperator.length = 1) {
        const number = document.getElementById("second-display");
        number.textContent = secondOperand += "1";
    } else {
        const number = document.getElementById("first-display");
        number.textContent = firstOperand += "1";
    }
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

function buttonSubtract() {
    currentOperator = "";
    const operator = document.getElementById("operator-display");
    operator.textContent = currentOperator += "-";
}

function buttonMultiply() {
    currentOperator = "";
    const operator = document.getElementById("operator-display");
    operator.textContent = currentOperator += "*";
}

function buttonDivide() {
    currentOperator = "";
    const operator = document.getElementById("operator-display");
    operator.textContent = currentOperator += "/";
}

function buttonModulus() {
    currentOperator = "";
    const operator = document.getElementById("operator-display");
    operator.textContent = currentOperator += "%";
}

function buttonSqrt() {
    currentOperator = "";
    const operator = document.getElementById("operator-display");
    operator.textContent = currentOperator += "√";
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

// Returning the result to the display
function displayResult() {
    document.getElementById("first-display").textContent = firstOperand + currentOperator + secondOperand;
    document.getElementById("second-display").textContent = result;
    firstOperand = result;
    currentOperator = "";
    document.getElementById("operator-display").textContent = currentOperator;
    secondOperand = "";
    result = "";
}

// Operate initialization logic
function operate(firstOperand, currentOperator, secondOperand) {
    if (currentOperator == "+") {
        result = add(firstOperand, secondOperand);
        displayResult();
    } else if (currentOperator == "-") {
        result = subtract(firstOperand, secondOperand);
        displayResult();
    } else if (currentOperator == "*") {
        result = multiply(firstOperand, secondOperand);
        displayResult();
    } else if (currentOperator == "/") {
        result = divide(firstOperand, secondOperand);
        displayResult();
    } else if (currentOperator == "%") {
        result = modulus(firstOperand, secondOperand);
        displayResult();
    } else if (currentOperator == "√") {
        result = sqrt(firstOperand);
        displayResult();
    } else {
        alert("Error, something went wrong while calculating!")
    }
}