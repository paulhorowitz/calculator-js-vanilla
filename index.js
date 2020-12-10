let num1 = undefined;
let num2 = undefined;
let total = undefined;
let operator = undefined;

function add(...args) {
    let total = 0
    for(let i = 0; i < args.length; i++) {
        total += parseFloat(args[i]);
    }
    return total;
}

function subtract(num1, num2) {
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
        total = parseFloat(add(num1, num2))
    }
    else if (operator == '-') {
        total = parseFloat(subtract(num1, num2));
    }
    else if (operator == '*') {
        total = multiply(num1, num2);
    }
    else if (operator == '/') {
        total = divide(num1, num2);
    }
    else {
        alert("Error")
        return;
    }
    return total;
}

const plusButtonEl = document.getElementById("plus");
const minusButtonEl = document.getElementById("minus");
const multiplyButtonEl = document.getElementById("times");
const divideButtonEl = document.getElementById("divide");
const output = document.querySelector("#output");
const clearButtonEl = document.getElementById("clear");
const equalsButtonEl = document.getElementById("equals");
const operatorEls = document.querySelectorAll(".operator");

function listening() {
    operatorEls.forEach(element => {
        element.addEventListener("click", (e) => {
            if (!num1) {
                operator = element.textContent;
                num1 = output.textContent;
                console.log(num1)
                output.textContent = element.textContent;
                console.log(operator);
            }
            else {
                num2 = output.textContent;
                output.textContent = '';
                total = operate(operator, num1, num2)
                output.textContent = `${total}`;
                num1 = total;
                operator = element.textContent;
                console.log(operator);
            }
        })
    });

    clearButtonEl.addEventListener("click", (element) => {
        num1 = undefined;
        num2 = undefined;
        result = undefined;
        output.textContent = '';
    })

    digitEls = document.querySelectorAll('.digit');
    digitEls.forEach(element =>
        element.addEventListener("click", (e) => {
        if (output.textContent == '+' || 
            output.textContent == '-' || 
            output.textContent == '*' || 
            output.textContent == '/' ||
            total == output.textContent) {
            output.textContent = '';
            }
            output.textContent += element.textContent
        }))    

    equalsButtonEl.addEventListener("click", (element) => {
        if (num1) {
            num2 = output.textContent
            console.log(num2)
            total = operate(operator, num1, num2);
            num2 = undefined;
            output.textContent = total;
            num1 = undefined;
            num2 = undefined;
        }
    })
}

listening();