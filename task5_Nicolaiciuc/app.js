const listName = [
    {
        name: 'Petru',
        marks: [8, 9, 10, 8]
    },
    {
        name: 'Daniel',
        marks: [2, 5, 6, 7]
    },
    {
        name: 'Constantin',
        marks: [6, 7, 8, 9]
    },
    {
        name: 'Maria',
        marks: [10, 9, 10, 9]
    },
    {
        name: 'Sofia',
        marks: [5, 5, 4, 4]
    }
];

//1. считает среднюю оценку и выводит имя и среднюю оценку для каждого элемента массива
let sum = 0
let average = 0;

for (const listNameElement of listName) {
    for (const listNameMark of listNameElement.marks) {
        sum += listNameMark;
    }
    average = sum / listNameElement.marks.length;
    console.log(`${listNameElement.name} имеет средний балл = `, average);
    sum = 0;
    average = 0;
}

// 2. выводит учеников у которых средняя оценка < 5
for (const listNameElement of listName) {
    for (const listNameMark of listNameElement.marks) {
        sum += listNameMark;
    }
    average = sum / listNameElement.marks.length;
    if (average < 5) {
        console.log(`${listNameElement.name} имеет средний балл ниже пяти`);
    }
    sum = 0;
    average = 0;
}

// 3. находит учеников с максимальной и минимальной оценкой
const listWithAverage = listName.map(item => ({
    name: item.name,
    average: item.marks.reduce((previousValue, currentValue) => previousValue + currentValue, 0) / item.marks.length
}))
listWithAverage.sort((a, b) => a.average-b.average)
console.log(`${listWithAverage[0].name} имеет самый низкий балл`);
console.log(`${listWithAverage[listWithAverage.length - 1].name} имеет самый высокий балл`)

// 4. сортирует учеников по средней оценке по убыванию
listWithAverage.sort((a, b) => b.average-a.average)
console.log(listWithAverage);


// 5. выводит тех учеников чья средняя оценка больше средней оценки всего класса
const totalAverage = listWithAverage.reduce((previousValue, currentValue) => previousValue + currentValue.average, 0) / listWithAverage.length;

for (const totalAverageElement of listWithAverage) {
    if (totalAverageElement.average > totalAverage) {
        console.log(`${totalAverageElement.name} имеет среднюю оценку больше средней оценки всего класса`);
    }
}