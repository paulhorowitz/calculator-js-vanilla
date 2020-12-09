function add(...args) {
    let total = 0
    for(let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

function subtract(num1, num2) {
    console.log(num1 - num2)
    return num1 - num2;
}

function multiply(...args) {
    let total = 1
    for(let i = 0; i < args.length; i++) {
        total *= args[i]
    }
    return total;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    if (operator == '+') {
        add(num1, num2)
    }
    else if (operator == '-') {
        subtract(num1, num2);
    }
    else if (operator == '*') {
        multiply(num1, num2);
    }
    else if (operator == '/') {
        divide(num1, num2);
    }
    else {
        alert("Error")
        return;
    }
}

function start() {
    let operator = "";
    do {
        operator = String(prompt('Enter an operator'));
    } while (operator != '+' && operator != '/' && operator != '*' && operator != '-');
    let num1 = parseFloat(prompt('Enter first number'))
    let num2 = parseFloat(prompt('Enter second number'))
    operate(operator, num1, num2)
}

const plusButtonEl = document.getElementById("plus");
const minusButtonEl = document.getElementById("minus");
const multiplyButtonEl = document.getElementById("times");
const divideButtonEl = document.getElementById("divide");
const output = document.querySelector('#output');
const clearButtonEl = document.getElementById("clear");
plusButtonEl.addEventListener("click", (element) =>
    output.textContent += '+');
minusButtonEl.addEventListener("click", (element) =>
    output.textContent += '-');
multiplyButtonEl.addEventListener("click", (element) =>
    output.textContent += '*');
divideButtonEl.addEventListener("click", (element) =>
    output.textContent += '/');
clearButtonEl.addEventListener("click", (element) =>
    output.textContent = '');
