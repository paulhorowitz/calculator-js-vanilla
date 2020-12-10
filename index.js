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
    console.log(`This is in operate function ${operator}`)
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

/*function start() {
    let operator = "";
    do {
        operator = String(prompt('Enter an operator'));
    } while (operator != '+' && operator != '/' && operator != '*' && operator != '-');
    let num1 = parseFloat(prompt('Enter first number'))
    let num2 = parseFloat(prompt('Enter second number'))
    operate(operator, num1, num2);
    num1 == num2;
    num2 == undefined;

}
*/
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
const equalsButtonEl = document.getElementById('equals');

function listening() {
    plusButtonEl.addEventListener("click", (element) => {
        if (!num1) {
            operator = '+';
            num1 = output.textContent;
            output.textContent = '+';
        }
        else {
            num2 = output.textContent;
            output.textContent = '+';
            total = operate(operator, num1, num2)
            output.textContent = `${total}`;
            num1 = total;
            operator = '+';
        }

    }
    );
    minusButtonEl.addEventListener("click", (element) => {
        if (!num1) {
            operator = '-';
            console.log(operator)
            num1 = output.textContent;
            output.textContent = '-';
        }
        else {
            num2 = output.textContent;
            console.log(`blah blah $`)
            output.textContent = '-';
            total = operate(operator, num1, num2)
            output.textContent = `${total}`;
            num1 = total;
            operator = '-'
        }
    }
    )
    multiplyButtonEl.addEventListener("click", (element) => {
        num1 = output.textContent;
        output.textContent = '*';
        console.log(num1);
    }
    )
    divideButtonEl.addEventListener("click", (element) => {
        num1 = output.textContent;
        output.textContent = '/';
        console.log(num1);
    }
    )
    clearButtonEl.addEventListener("click", (element) => {
        num1 = undefined;
        num2 = undefined;
        result = undefined;
        output.textContent = '';
    })
    oneButtonEl.addEventListener("click", (element) => {
        if (output.textContent == '+' || 
            output.textContent == '-' || 
            output.textContent == '*' ||
            output.textContent == '/' ||
            output.textContent == total) {
        output.textContent = '';
        }
        output.textContent += '1';
    })
    twoButtonEl.addEventListener("click", (element) => {
        if (output.textContent == '+' || 
            output.textContent == '-' || 
            output.textContent == '*' ||
            output.textContent == '/' ||
            output.textContent == total) {
        output.textContent = '';
        }
        output.textContent += '2';
    })
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
    equalsButtonEl.addEventListener("click", (element) => {
        console.log('test');
        num2 = output.textContent;
        if (num1 && num2) {
            operate(operator, num1, num2);
        }
})
}

listening();

// num1=0
// if '+' || '-' || '*' || '/' is clicked {
  // save value in num 1
  // wait for another operator or equals sign
  // when clicked, invoke relevant function depending on what operator is equal to.
// }

// if any number is clicked }
    //num1 = that number
//}  
