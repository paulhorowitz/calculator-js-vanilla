let num1 = undefined;
let num2 = undefined;
let total = undefined;
let operator = undefined;

const output = document.querySelector("#output");
const clearButtonEl = document.getElementById("clear");
const equalsButtonEl = document.getElementById("equals");
const operatorEls = document.querySelectorAll(".operator");
const digitEls = document.querySelectorAll('.digit');
const decimalEl = document.getElementById("decimal");
const containerEl = document.querySelector(".container");
const resetEl = document.querySelector(".reset");

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
    
    // Check to see if user is trying to divide by zero
    if (num2 == 0) {
        
        containerEl.classList.add("zero")
        setTimeout(function() {        
            resetEl.style.display = 'flex';
        }, 3000)
    } 
    return num1 / num2;
}

// Pass in the numbers and operators entered and run the relevant operator function

function operate(operator, num1, num2) {
    if (operator == '+') {
        total = parseFloat(add(num1, num2))
    }
    else if (operator == '-') {
        total = parseFloat(subtract(num1, num2));
    }
    else if (operator == 'x') {
        total = multiply(num1, num2);
    }
    else if (operator == '/') {
        total = divide(num1, num2);
    }
    else {
        alert("Error")
        return;
    }

    // rounding if length of digits is above 9
    if (total.toString().length > 9) {
        total = parseFloat(total.toExponential());
        total = total.toPrecision(5);
    }
    return total;
}

// listener to wait for input from user
function listening() {
    operatorEls.forEach(element => {
        element.addEventListener("click", (e) => {
            if (!num1) {
                operator = element.textContent;
                num1 = output.textContent;
                output.textContent = element.textContent;
            }
            else {
                num2 = output.textContent;
                output.textContent = '';
                total = operate(operator, num1, num2)
                output.textContent = `${total}`;
                num1 = total;
                operator = element.textContent;
            }
        })
    });

    // clear button resets variables and output on user interface
    clearButtonEl.addEventListener("click", (element) => {
        num1 = undefined;
        num2 = undefined;
        result = undefined;
        output.textContent = '';
    })

    // if an operator is pressed we clear the screen so that the next number can be inputted
    digitEls.forEach(element =>
        element.addEventListener("click", (e) => {
        if (output.textContent == '+' || 
            output.textContent == '-' || 
            output.textContent == 'x' || 
            output.textContent == '/' ||
            total == output.textContent) {
                output.textContent = '';
            }
        if(output.textContent.length <9) {
            output.textContent += element.textContent;
        }
        }))    

    // if equals is pressed we display the total and reset the calculation variables
    equalsButtonEl.addEventListener("click", (element) => {
        if (num1) {
            num2 = output.textContent
            total = operate(operator, num1, num2);
            num2 = undefined;
            output.textContent = total;
            num1 = undefined;
            num2 = undefined;
        }
    })

    // ensures we can't have two decimal places
    decimalEl.addEventListener("click", (element) => {
        if (!output.textContent.includes('.'))
        output.textContent += '.';
    })
}

listening();