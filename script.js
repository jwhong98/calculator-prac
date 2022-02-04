let input = '';
const display = document.querySelector('.display');

const numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        input += e.target.textContent;
        display.textContent = input;
    })
})

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        input += e.target.textContent;
        display.textContent = input;
    })
})

const add = (num1, num2) => {
    display.textContent = num1 + num2
}

const subtract = (num1, num2) => {
    display.textContent = num1 - num2
}

const multiply = (num1, num2) => {
    display.textContent = num1 * num2
}

const divide = (num1, num2) => {
    if(num2 === 0) {
        alert("Can't divide by 0");
    } else {
        display.textContent = (num1 / num2).toFixed(6);
    }
    
}

const operate = (operator, num1, num2) => {
    //use switch statement depening on the operator
    switch(operator) {
        case '+' :
            return add(num1, num2);
        case '-' :
            return subtract(num1, num2);
        case '*' :
            return multiply(num1, num2);
        case '/' :
            return divide(num1, num2);
        default:
            alert('Error')
    }
}

const compute = document.querySelector(".compute");
compute.addEventListener('click', () => {
let num = input.split(/\D/g).map(Number); //holds all the numbers
let op = input.split(/\d+/g).filter(Boolean); //holds all the operators
input = ''; // clear input
console.log(num);
console.log(op);
for(let i = 0; i < op.length; i++) {
    operate(op[i], num[i], num[i+1])
}
});

