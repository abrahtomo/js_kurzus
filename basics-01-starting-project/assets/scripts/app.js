let result = 0;
let resultDesc = '';
let lastInput = ''
let first = true;

function add() {
    const input = parseInt(userInput.value)
    lastInput = input;
    if (first) {
        resultDesc += `${result} + ${input}`;
    } else {
        resultDesc += ` + ${input}`;
    }
    first = false;
    result = result + input;
    outputResult(result, resultDesc);
}

addBtn.addEventListener('click', add);