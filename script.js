document.getElementById('digits').addEventListener('click', e => {
    let inputText = document.getElementById('input-text');
    const input = e.target.innerText;
    inputText.value = inputText.value + input;
    if (input == 'AC') {
        inputText.value = '';
    }
    if (input == 'DEL') {
        inputText.value = inputText.value.substr(0, (inputText.value.length - 4));
    }
    if (input == '=' && input !== '') {
        inputText.value = inputText.value.substr(0, (inputText.value.length - 1));
        inputText.value = eval(inputText.value);
    }
})