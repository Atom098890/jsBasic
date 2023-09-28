'use strict';

function calculate() {
    document.querySelector('.action').addEventListener('click', (event) => {
        const action = event.target.attributes[1].value
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
            case 'addition':
                document.querySelector('.result').innerText = `Result: ${Number(inputOne) + Number(inputTwo)}`;
                break;
            case 'subtraction':
                document.querySelector('.result').innerText = `Result: ${Number(inputOne) - Number(inputTwo)}`;
                break;
            case 'multiplication':
                document.querySelector('.result').innerText = `Result: ${Number(inputOne) * Number(inputTwo)}`;
                break;
            case 'division':
                document.querySelector('.result').innerText = `Result: ${Number(inputOne) / Number(inputTwo)}`;
                break;
            default:
                console.log('Нет совпадения!');
        }
    });
    
}

calculate();

