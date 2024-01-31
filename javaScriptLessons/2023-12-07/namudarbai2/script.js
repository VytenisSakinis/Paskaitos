function randomArray(){
    const array = [];
    const characters = `ABCD`;
for (let i = 0; i < 200; i++)
{
    let random = characters[Math.floor(Math.random()*characters.length)];
    array.push(random);
    
}
return array;
}



let array = [];



array = randomArray();

console.log(array);

let a = 0;
let b = 0;
let c = 0;
let d = 0;



for (let i = 0; i < 200; i++)
{
    if(array[i] === "A") a++
    if(array[i] === "B") b++
    if(array[i] === "C") c++
    if(array[i] === "D") d++
}

console.log(`Raidžių A ${a}`)
console.log(`Raidžių B ${b}`)
console.log(`Raidžių C ${c}`)
console.log(`Raidžių D ${d}`)

array.sort();

console.log(array);

let array2 = randomArray();
let array3 = randomArray();
let array4 = randomArray();

console.log(array2);
console.log(array3);
console.log(array4);

let arraySum = [];
let aa = 0;

for (let i = 0; i < array2.length; i++) {
    arraySum.push(array2[i] + array3[i] + array4[i]);
}

console.log(arraySum);

let uniqueArray = [...new Set(arraySum)];
let uniqueStrings = uniqueArray.length;

console.log(uniqueStrings)


// NEXT ----------------------------------------------------------------------

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateArrayOfRandomNumbers(min, max, length){
    const uniqueNumbers = new Set();
    while (uniqueNumbers.size < length) {
        const randomNumber = rand(min, max);
        uniqueNumbers.add(randomNumber)
    }
    return [...uniqueNumbers]
}

let firstArray = generateArrayOfRandomNumbers(100, 999, 100);
let secondArray = generateArrayOfRandomNumbers(100, 999, 100);

console.log(firstArray);
console.log(secondArray);


// next ----------
let uniqueString = []

for (let i = 0; i < 100; i++)
{
    if(array2[i] !== array3[i]) uniqueString.push(array2[i]);
}
console.log(uniqueString);


console.log(`========`)

const matchingNumbers = firstArray.filter(value => secondArray.includes(value))

console.log(matchingNumbers);

let newArray = [];

firstArray = generateArrayOfRandomNumbers(100, 999, 100);
secondArray = generateArrayOfRandomNumbers(100, 999, 100);

newArray = firstArray.map((value, index) =>
{
    for (i = 0; i < 100; i++){
    value = secondArray[i];
    index = firstArray[i];
    }
    return {value, index};
})
console.log(newArray)
