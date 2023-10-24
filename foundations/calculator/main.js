let firstOperand = '';
let secondOperand = '';
let operator = '';

const screenData = document.getElementById('screen-data');
const numberButtons = document.querySelectorAll('.numbers');
const operationButtons = document.querySelectorAll('.operations'); 

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (screenData.innerText === '0') {
            screenData.textContent = '';
        };
        appendNumber(button.textContent);
        screenData.textContent += button.textContent
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        clear();
        operator = button.textContent;
        screenData.textContent += button.textContent
    });
});

function appendNumber(number) {
    firstOperand += number;
};

function clear() {
    firstOperand = '';
    secondOperand = '';
};

function add(a, b){
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return a / b;
};

function calculate(operator, a, b){
    a = Number(a);
    b = Number(b);
    switch (operator){
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    };
};




