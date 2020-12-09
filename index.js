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
const oneButtonEl = document.getElementById('one');
const twoButtonEl = document.getElementById('two');
const threeButtonEl = document.getElementById('three');
const fourButtonEl = document.getElementById('four');
const fiveButtonEl = document.getElementById('five');
const sixButtonEl = document.getElementById('six');
const sevenButtonEl = document.getElementById('seven');
const eightButtonEl = document.getElementById('eight');
const nineButtonEl = document.getElementById('nine');
const zeroButtonEl = document.getElementById('zero');

plusButtonEl.addEventListener("click", (element) =>
    output.textContent = '+');
minusButtonEl.addEventListener("click", (element) =>
    output.textContent = '-');
multiplyButtonEl.addEventListener("click", (element) =>
    output.textContent = '*');
divideButtonEl.addEventListener("click", (element) =>
    output.textContent = '/');
clearButtonEl.addEventListener("click", (element) =>
    output.textContent = '');
oneButtonEl.addEventListener("click", (element) => 
    output.textContent += '1');
twoButtonEl.addEventListener("click", (element) => 
    output.textContent += '2');
threeButtonEl.addEventListener("click", (element) => 
    output.textContent += '3');
fourButtonEl.addEventListener("click", (element) => 
    output.textContent += '4');
fiveButtonEl.addEventListener("click", (element) => 
    output.textContent += '5');
sixButtonEl.addEventListener("click", (element) => 
    output.textContent += '6');
sevenButtonEl.addEventListener("click", (element) => 
    output.textContent += '7');
eightButtonEl.addEventListener("click", (element) => 
    output.textContent += '8');
nineButtonEl.addEventListener("click", (element) => 
    output.textContent += '9');
zeroButtonEl.addEventListener("click", (element) => 
    output.textContent += '0');