let history = '';
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('result').innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('result').innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        document.getElementById('result').innerText = '0';
    } else {
        document.getElementById('result').innerText = currentInput;
    }
}

function calculate(operation) {
    if (currentInput === '') return;
    currentInput += ' ' + operation + ' ';
    document.getElementById('result').innerText = currentInput;
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        history += currentInput + ' = ' + result + '<br>';
        document.getElementById('history').innerHTML = history;
        document.getElementById('result').innerText = result;
        currentInput = '';
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
    }
}
