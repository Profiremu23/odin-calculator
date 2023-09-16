// Initializing variables for calculator display
let firstOperand = "";
let currentOperator = "";
let secondOperand = "";
let result = "";

// Displaying variables on the calculator display
document.getElementById("first-display").textContent = 0;
document.getElementById("operator-display").textContent = currentOperator;
document.getElementById("second-display").textContent = secondOperand;

// Avoiding digit display overflow
function convertToScientificNotation() { // To automatically convert any number greater than one quintillion
    if (secondOperand.length >= 19 && !secondOperand.includes('.')) {
        const sciNot = document.getElementById("second-display");
        sciNot.textContent = Number(secondOperand).toExponential();
    } else if (firstOperand.length >= 19 && !secondOperand.includes('.')) {
        const sciNot = document.getElementById("first-display");
        sciNot.textContent = Number(firstOperand).toExponential();
    }
}

// Functions for the number buttons
function numberZero() {
    if (currentOperator.length === 1) {
        const number = document.getElementById("second-display");
        number.textContent = secondOperand += "0";
    } else {
        const number = document.getElementById("first-display");
        number.textContent = firstOperand += "0";
    }
    convertToScientificNotation();
}

function numberOne() {
    if (currentOperator.length === 1) {
        const number = document.getElementById("second-display");
        number.textContent = secondOperand += "1";
    } else {
        const number = document.getElementById("first-display");
        number.textContent = firstOperand += "1";
    }
    convertToScientificNotation();
}

function numberTwo() {
    if (currentOperator.length === 1) {
        const number = document.getElementById("second-display");
        number.textContent = secondOperand += "2";
    } else {
        const number = document.getElementById("first-display");
        number.textContent = firstOperand += "2";
    }
    convertToScientificNotation();
}

function numberThree() {
    if (currentOperator.length === 1) {
        const number = document.getElementById("second-display");
        number.textContent = secondOperand += "3";
    } else {
        const number = document.getElementById("first-display");
        number.textContent = firstOperand += "3";
    }
    convertToScientificNotation();
}

function numberFour() {
    if (currentOperator.length === 1) {
        const number = document.getElementById("second-display");
        number.textContent = secondOperand += "4";
    } else {
        const number = document.getElementById("first-display");
        number.textContent = firstOperand += "4";
    }
    convertToScientificNotation();
}

function numberFive() {
    if (currentOperator.length === 1) {
        const number = document.getElementById("second-display");
        number.textContent = secondOperand += "5";
    } else {
        const number = document.getElementById("first-display");
        number.textContent = firstOperand += "5";
    }
    convertToScientificNotation();
}

function numberSix() {
    if (currentOperator.length === 1) {
        const number = document.getElementById("second-display");
        number.textContent = secondOperand += "6";
    } else {
        const number = document.getElementById("first-display");
        number.textContent = firstOperand += "6";
    }
    convertToScientificNotation();
}

function numberSeven() {
    if (currentOperator.length === 1) {
        const number = document.getElementById("second-display");
        number.textContent = secondOperand += "7";
    } else {
        const number = document.getElementById("first-display");
        number.textContent = firstOperand += "7";
    }
    convertToScientificNotation();
}

function numberEight() {
    if (currentOperator.length === 1) {
        const number = document.getElementById("second-display");
        number.textContent = secondOperand += "8";
    } else {
        const number = document.getElementById("first-display");
        number.textContent = firstOperand += "8";
    }
    convertToScientificNotation();
}

function numberNine() {
    if (currentOperator.length === 1) {
        const number = document.getElementById("second-display");
        number.textContent = secondOperand += "9";
    } else {
        const number = document.getElementById("first-display");
        number.textContent = firstOperand += "9";
    }
    convertToScientificNotation();
}

function decimal() {
    if (currentOperator.length === 1 && !secondOperand.includes('.')) {
        const number = document.getElementById("second-display");
        number.textContent = secondOperand += ".";
    } else if (currentOperator.length === 0 && !firstOperand.includes('.')) {
        const number = document.getElementById("first-display");
        number.textContent = firstOperand += ".";
    }
}

//Functions for the operator buttons
function buttonAdd() {
    if (currentOperator.length === 1) {
        operate(firstOperand, currentOperator, secondOperand);
        const operator = document.getElementById("operator-display");
        operator.textContent = currentOperator += "+";
    } else {
        const operator = document.getElementById("operator-display");
        operator.textContent = currentOperator += "+";
    }
}

function buttonSubtract() {
    if (currentOperator.length === 1) {
        operate(firstOperand, currentOperator, secondOperand);
        const operator = document.getElementById("operator-display");
        operator.textContent = currentOperator += "-";
    }
    else {
        const operator = document.getElementById("operator-display");
        operator.textContent = currentOperator += "-";
    }
}

function buttonMultiply() {
    if (currentOperator.length === 1) {
        operate(firstOperand, currentOperator, secondOperand);
        const operator = document.getElementById("operator-display");
        operator.textContent = currentOperator += "*";
    }
    else {
        const operator = document.getElementById("operator-display");
        operator.textContent = currentOperator += "*";
    }
}

function buttonDivide() {
    if (currentOperator.length === 1) {
        operate(firstOperand, currentOperator, secondOperand);
        const operator = document.getElementById("operator-display");
        operator.textContent = currentOperator += "/";
    } else {
        const operator = document.getElementById("operator-display");
        operator.textContent = currentOperator += "/";
    }
}

function buttonModulus() {
    if (currentOperator.length === 1) {
        operate(firstOperand, currentOperator, secondOperand);
        const operator = document.getElementById("operator-display");
        operator.textContent = currentOperator += "%";
    } else {
        const operator = document.getElementById("operator-display");
        operator.textContent = currentOperator += "%";
    }
}

function buttonSqrt() {
    if (currentOperator.length === 1) {
        operate(firstOperand, currentOperator, secondOperand);
        const operator = document.getElementById("operator-display");
        operator.textContent = currentOperator += "√";
    } else {
        const operator = document.getElementById("operator-display");
        operator.textContent = currentOperator += "√";
    }
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

function backspace() {
    if (currentOperator.length === 1) {
        const string = secondOperand;
        secondOperand = string.slice(0, secondOperand.length - 1);
        document.getElementById("second-display").textContent = secondOperand;
        if (secondOperand.length === 0) {
            document.getElementById("second-display").textContent = 0;
        }
    } else {
        const string = firstOperand;
        firstOperand = string.slice(0, firstOperand.length - 1);
        document.getElementById("first-display").textContent = firstOperand;
        if (firstOperand.length === 0) {
            document.getElementById("first-display").textContent = 0;
        }
    }
    convertToScientificNotation();
}

// Functions for various operators
function add(x, y) {
    return Number(x) + Number(y); // To get around slapping numbers to each other while being strings in JavaScript
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
    secondOperand = "";
    document.getElementById("second-display").textContent = secondOperand;
    document.getElementById("first-display").textContent = result;
    firstOperand = result;
    currentOperator = "";
    document.getElementById("operator-display").textContent = currentOperator;
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
        if (firstOperand === "0" || secondOperand === "0") {
            result = "Google en passant"
        } else {
            result = divide(firstOperand, secondOperand);
        }
        displayResult();
    } else if (currentOperator == "%") {
        if (firstOperand === "0" || secondOperand === "0") {
            result = "Are you really trying?"
        } else {
            result = modulus(firstOperand, secondOperand);
        }
        displayResult();
    } else if (currentOperator == "√") {
        result = sqrt(firstOperand);
        displayResult();
    } else {
        alert("Error, something went wrong while calculating!")
    }
}
