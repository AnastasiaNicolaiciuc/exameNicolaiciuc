const input = prompt('Введите число');

if (isNaN(Number(input))) {
    alert('Error');
} else if (input > 0) {
    alert(1);
} else if (input < 0) {
    alert(-1);
} else {
    alert(0);
}