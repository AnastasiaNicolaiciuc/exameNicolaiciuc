const plusButton = document.createElement('button');
const minusButton = document.createElement('button');
const input = document.createElement('input');

plusButton.innerText = "+";
minusButton.innerText = "-";
input.value = '0';
input.readOnly = true;

plusButton.addEventListener("click", () =>{
    minusButton.disabled = false;

    if(Number(input.value) < 9) {
        input.value = String(Number(input.value) + 1);
    } else {
        plusButton.disabled = true;
    }
})

minusButton.addEventListener("click", () =>{
    plusButton.disabled = false;

    if(Number(input.value) > 0) {
        input.value = String(Number(input.value) - 1);
    } else {
        minusButton.disabled = true;
    }
})

console.dir(plusButton);
document.body.append(minusButton, input, plusButton)