'use strict';

function calculate(action) {
    const inputOne = document.querySelector('.inputOne').value;
    const inputTwo = document.querySelector('.inputTwo').value;
    if (!inputOne && !inputTwo) {
        return;
    }

    if (isNaN(inputOne) || isNaN(inputTwo)) {
        alert('Введите числа в поля ввода!');
        document.querySelector('.inputOne').value = '';
        document.querySelector('.inputTwo').value = '';
        return;
    }

    document.querySelector('.inputOne').value = '';
    document.querySelector('.inputTwo').value = '';

    switch(action) {
        case '+':
            document.querySelector('.result').innerText = `Result: ${Number(inputOne) + Number(inputTwo)}`;
            break;
        case '-':
            document.querySelector('.result').innerText = `Result: ${Number(inputOne) - Number(inputTwo)}`;
            break;
        case '*':
            document.querySelector('.result').innerText = `Result: ${Number(inputOne) * Number(inputTwo)}`;
            break;
        case '/':
            document.querySelector('.result').innerText = `Result: ${Number(inputOne) / Number(inputTwo)}`;
            break;
        default:
            console.log('Нет совпадения!');
    }
}