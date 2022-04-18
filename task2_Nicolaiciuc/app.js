// for
const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
    console.log('Первый способ вывода массива', array[i]);
}
console.log("-------------------------------");

// for in
const array2 = [1, 2, 3, 4, 5];

for (const array2Key in array2) {
    console.log('Второй способ вывода массива', array2[array2Key]);
}
console.log("-------------------------------");

// for of
const array3 = [1, 2, 3, 4, 5];

for (const number of array3) {
    console.log('Третий способ вывода массива', number);
}
console.log("-------------------------------");

// forEach
const array4 = [1, 2, 3, 4, 5];

array4.forEach(element => console.log('Четвёртый способ вывода массива', element));
console.log("-------------------------------");

// while
const array5 = [1, 2, 3, 4, 5]
let k = 0;

while (k  < array5.length) {
    console.log('Пятый способ вывода массива',array5[k])
    k = k + 1
}
console.log("-------------------------------");

// do … while
const array6 = [1, 2, 3, 4, 5]
let m = 0;
do {
    console.log('Шестой способ вывода массива',array6[m])
    m = m + 1
} while (m < array6.length)
console.log("-------------------------------");

// map
const array7 = [1, 2, 3, 4, 5]
const list = array7.map(element => console.log('Седьмой способ вывода массива', element));
console.log("-------------------------------");

// filter
const array8 = [1, 2, 3, 4, 5]
array8.filter(element => {
    console.log('Восьмой способ вывода массива', element)
    return true;
});