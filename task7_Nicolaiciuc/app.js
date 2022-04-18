const input = document.createElement('input');

input.setAttribute('type', 'number');

input.addEventListener('blur', ()=> {
    if (input.value.includes('.')) {
        input.value = "0";
    }
})

document.body.append(input);