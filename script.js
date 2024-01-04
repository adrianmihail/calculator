let inputNumbers = [];
let operator = '';


const nrSeven = document.querySelector('#seven');
nrSeven.addEventListener('click', () => {
    const value = 7;
    inputNumbers.push(value);
    console.log(inputNumbers);
});

const nrEight = document.querySelector('#eight');
nrEight.addEventListener('click', () => {
    const value = 8;
    inputNumbers.push(value);
    console.log(inputNumbers);
});

const nrNine = document.querySelector('#nine');
nrNine.addEventListener('click', () => {
    const value = 9;
    inputNumbers.push(value);
    console.log(inputNumbers);
});

const nrFour = document.querySelector('#four');
nrFour.addEventListener('click', () => {
    const value = 4;
    inputNumbers.push(value);
    console.log(inputNumbers);
});

const nrFive = document.querySelector('#five');
nrFive.addEventListener('click', () => {
    const value = 5;
    inputNumbers.push(value);
    console.log(inputNumbers);
});

const nrSix = document.querySelector('#six');
nrSix.addEventListener('click', () => {
    const value = 6;
    inputNumbers.push(value);
    console.log(inputNumbers);
});

const nrOne = document.querySelector('#one');
nrOne.addEventListener('click', () => {
    const value = 1;
    inputNumbers.push(value);
    console.log(inputNumbers);
});

const nrTwo = document.querySelector('#two');
nrTwo.addEventListener('click', () => {
    const value = 2;
    inputNumbers.push(value);
    console.log(inputNumbers);
});

const nrThree = document.querySelector('#three');
nrThree.addEventListener('click', () => {
    const value = 3;
    inputNumbers.push(value);
    console.log(inputNumbers);
});

const nrZero = document.querySelector('#zero');
nrZero.addEventListener('click', () => {
    const value = 0;
    inputNumbers.push(value);
    console.log(inputNumbers);
});

const add = document.querySelector('#add');
add.addEventListener('click', () => {
    const value = '+';
    operator = '+';
    inputNumbers.push(value);
    console.log(inputNumbers);
});

const subtract = document.querySelector('#subtract');
subtract.addEventListener('click', () => {
    const value = '-';
    operator = '-';
    inputNumbers.push(value);
    console.log(inputNumbers);
});

const multiply = document.querySelector('#multiply');
multiply.addEventListener('click', () => {
    const value = '*';
    operator = '*';
    inputNumbers.push(value);
    console.log(inputNumbers);
});

const divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    const value = '/';
    operator = '/';
    inputNumbers.push(value);
    console.log(inputNumbers);
});

const dot = document.querySelector('#dot');
dot.addEventListener('click', () => {
    const value = '.';
    inputNumbers.push(value);
    console.log(inputNumbers);
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    inputNumbers = [];
    console.log(inputNumbers);
});

const result = document.querySelector('#result');
result.addEventListener('click', () => {
    let operatorUsed = inputNumbers.indexOf(operator);

    let firstNumber = inputNumbers.splice(0, operatorUsed);
    firstNumber = firstNumber.join('');
    console.log(firstNumber);

    let secondNumber = inputNumbers.splice(1, inputNumbers.length);
    secondNumber = secondNumber.join('');
    console.log(secondNumber);

    let result = 0;
    switch(operator) {
        case '+':
            result = Number(firstNumber) + Number(secondNumber);
        break;
        
        case '-':
            result = Number(firstNumber) - Number(secondNumber);
        break;
        
        case '*':
            result = Number(firstNumber) * Number(secondNumber);
        break;

        case '/':
            result = Number(firstNumber) / Number(secondNumber);
        break;
        
        default:
            result = 'No operator introduced. Please clear and try again.';
    };

    inputNumbers = [result];

    const resultDisplay = document.querySelector('#text');
    resultDisplay.textContent = inputNumbers.toString();

    return console.log(inputNumbers);
});
