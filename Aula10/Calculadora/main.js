let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            calculate();
        } else if (button.textContent === 'C') {
            clearDisplay();
        } else {
            addToDisplay(button.textContent);
        }
    });
});

function addToDisplay(value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function clearDisplay() {
    display.textContent = '0';
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}