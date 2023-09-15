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
    if (currentOperator.length === 1) {
        const number = document.getElementById("second-display");
        number.textContent = secondOperand += "0";
    } else {
        const number = document.getElementById("first-display");
        number.textContent = firstOperand += "0";
    }
}

function numberOne() {
    if (currentOperator.length === 1) {
        const number = document.getElementById("second-display");
        number.textContent = secondOperand += "1";
    } else {
        const number = document.getElementById("first-display");
        number.textContent = firstOperand += "1";
    }
}

function numberTwo() {
    if (currentOperator.length === 1) {
        const number = document.getElementById("second-display");
        number.textContent = secondOperand += "2";
    } else {
        const number = document.getElementById("first-display");
        number.textContent = firstOperand += "2";
    }
}

function numberThree() {
    if (currentOperator.length === 1) {
        const number = document.getElementById("second-display");
        number.textContent = secondOperand += "3";
    } else {
        const number = document.getElementById("first-display");
        number.textContent = firstOperand += "3";
    }
}

function numberFour() {
    if (currentOperator.length === 1) {
        const number = document.getElementById("second-display");
        number.textContent = secondOperand += "4";
    } else {
        const number = document.getElementById("first-display");
        number.textContent = firstOperand += "4";
    }
}

function numberFive() {
    if (currentOperator.length === 1) {
        const number = document.getElementById("second-display");
        number.textContent = secondOperand += "5";
    } else {
        const number = document.getElementById("first-display");
        number.textContent = firstOperand += "5";
    }
}

function numberSix() {
    if (currentOperator.length === 1) {
        const number = document.getElementById("second-display");
        number.textContent = secondOperand += "6";
    } else {
        const number = document.getElementById("first-display");
        number.textContent = firstOperand += "6";
    }
}

function numberSeven() {
    if (currentOperator.length === 1) {
        const number = document.getElementById("second-display");
        number.textContent = secondOperand += "7";
    } else {
        const number = document.getElementById("first-display");
        number.textContent = firstOperand += "7";
    }
}

function numberEight() {
    if (currentOperator.length === 1) {
        const number = document.getElementById("second-display");
        number.textContent = secondOperand += "8";
    } else {
        const number = document.getElementById("first-display");
        number.textContent = firstOperand += "8";
    }
}

function numberNine() {
    if (currentOperator.length === 1) {
        const number = document.getElementById("second-display");
        number.textContent = secondOperand += "9";
    } else {
        const number = document.getElementById("first-display");
        number.textContent = firstOperand += "9";
    }
}

function decimal() {
    if (currentOperator.length === 1) {
        const number = document.getElementById("second-display");
        number.textContent = secondOperand += ".";
    } else {
        const number = document.getElementById("first-display");
        number.textContent = firstOperand += ".";
    }
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
}

// Functions for various operators
function add(x, y) {
    return Number(x) + Number(y); // To get around slapping strings together in JavaScript
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
        if (secondOperand === "0") {
            result = "Google en passant"
        } else {
            result = divide(firstOperand, secondOperand);
        }
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
