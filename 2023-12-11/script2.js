function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateRandomNumbersArray = (length, min, max) => {
    const arr = [];
    for(let i = 0; i < length; i++) arr.push(rand(min, max));
    return arr;
}

const generateString = (length) => {
    let str = '';
    for(let i = 0; i < length; i++)
    {
        str += String.fromCharCode(rand(65, 90))
    }
    return str;
}

const stringArray = [];
for (let i = 0; i < 100; i++)
{
stringArray.push(generateString(4));
}

console.log(stringArray);

stringArray.sort();

console.log(stringArray);

stringArray.sort().reverse();

console.log(stringArray);

// 5

const array = generateRandomNumbersArray(100, -100, 200);
console.log(array);

// 6

if(array.includes(68)) console.log('Masyvas turi skaičių 68')
else console.log(`Masyvas neturi skaičiaus 68`)

// 7
array.sort((num1, num2) => {
    return num1 - num2;
})
array.reverse();

console.log(array);

//9

let min = Math.min(...array)
let max = Math.max(...array)

console.log(`Minimali masyvo reikšmė: ${min}`);
console.log(`Maksimali masyvo reikšmė: ${max}`);