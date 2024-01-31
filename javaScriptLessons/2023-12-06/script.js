function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}

function generateArrayOfRandomNumbers(min, max, countOfElements)
{
    let array = [];
    for (let i = 0; i < countOfElements; i++){
        array.push(rand(min, max))
    }
    return array;
}

function getNextElement(array, index)
{
    if (array.length - 1 === index) return array[0];
    else return array[index + 1];
}

let arr = generateArrayOfRandomNumbers(0, 10, 20);

console.log(arr);


for (let i = 0; i < arr.length; i++)
{
    if (arr[i] % 2 === 0)
    {
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);

// B salyga

arr = generateArrayOfRandomNumbers(0, 10, 20);

console.log(arr);


for (let i = 0; i < arr.length; i++)
{
    if (arr[i] % 2 !== 0)
    {
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);

// C

arr = generateArrayOfRandomNumbers(0, 10, 20);


console.log(arr);

for (let i = 0; i < arr.length; i++)
{
    if (arr[i] % 3 === 0)
    {
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);

// D

arr = generateArrayOfRandomNumbers(0, 10, 20);


console.log(arr);

for (let i = 0; i < arr.length; i++)
{
    if (i === arr[i])
    {
        arr.splice(i, 1);
        i--;
    }
}
console.log(`skaicius`);
console.log(arr);

// E

arr = generateArrayOfRandomNumbers(0, 10, 20);


console.log(arr);

for (let i = 0; i < arr.length; i++)
{
    if (arr[i] < 5 || arr[i] > 8)
    {
        arr.splice(i, 1);
        i--;
    }
}

console.log(arr);

// F
arr = generateArrayOfRandomNumbers(0, 10, 20);


console.log(arr);

for (let i = 0; i < arr.length; i++)
{
    if (arr[i] <= 5 && arr[i] >= 2)
    {
        arr.splice(i, 1);
        i--;
    }
}

console.log(arr);

// g

arr = generateArrayOfRandomNumbers(0, 10, 20);


console.log(arr);

for (let i = 0; i < arr.length; i++)
{
    let nextElement = getNextElement(arr, i);
    if (arr[i] + nextElement >= 10){
        arr.splice(i, 1);
        i--;
    }
}

console.log("vava");
console.log(arr);

// h

arr = generateArrayOfRandomNumbers(0, 10, 20);


console.log(arr);

for (let i = 0; i < arr.length; i++)
{
    let nextElement = getNextElement(arr, i);
    if ((arr[i] + nextElement) % 2 === 0){
        arr.splice(i, 1);
        i--;
    }
}

console.log("vava");
console.log(arr);