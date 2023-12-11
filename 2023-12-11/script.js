// Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateArrayOfStrings = (length)=>{
    const arr = [];
    for(let i = 0; i < length; i++){
        let atsitiktineRaide = String.fromCharCode(rand(65, 68))
        arr.push(atsitiktineRaide);
    }
    return arr;
}

console.log(generateArrayOfStrings(200));


// Išrūšiuokite 1 uždavinio masyvą pagal abecėlę.

const charactersArray = generateArrayOfStrings(200);

charactersArray.sort();
console.log(charactersArray);
// Sugeneruokite 3 masyvus pagal 1 uždavinio sąlygą. Sudėkite masyvų reikšmes, sudėdami reikšmes pagal atitinkamus indeksus. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.

const arr1 = generateArrayOfStrings(200), arr2 = generateArrayOfStrings(200), arr3 = generateArrayOfStrings(200);

const sumArray = [], uniqueValues = [];
for (let index in arr1)
{
    sumArray[index] = arr1[index].concat(arr2[index], arr3[index]);
}

console.log(sumArray);

for(const currentValue of sumArray)
{
    if(!uniqueValues.includes(currentValue))
    {
        uniqueValues.push(currentValue);
    }
}

console.log(uniqueValues);

let superUniqueCombinations = 0;
let superUniqueValues = [];

for(let value of sumArray)
{
    let countOfThisCombination = 0;
    for(let value2 of sumArray) if (value === value2) countOfThisCombination++
        
    if(countOfThisCombination === 1) {
    superUniqueCombinations++
    superUniqueValues.push(value);
    }
}

console.log(superUniqueCombinations);
console.log(superUniqueValues);
// Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).

function generateUniqueArray(length, min, max)
{
    const arr = []

    while(arr.length < length)
{
    let randomNumber = rand(min, max);
    if (!arr.includes(randomNumber)) arr.push(randomNumber)
}
    return arr;
}


const array1 = generateUniqueArray(100, 100, 999), array2 = generateUniqueArray(100, 100, 999);

console.log(`Masyvas 1`)
console.log(array1)
console.log(`Masyvas 2:`)
console.log(array2)


// Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 3 uždavinio masyve, bet nėra antrame 3 uždavinio masyve.


const fifthArray = [];

for(let index in arr1)
{
    if(arr1[index] !== arr2[index])
    {
        fifthArray.push(arr1[index]);
    }
}

console.log(fifthArray);
// Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 4 uždavinio masyvuose.

const matchingNumbers = array1.filter(value => array2.includes(value));

console.log(matchingNumbers);

// Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 4 uždavinio masyvo reikšmės, o jo reikšmės būtų iš antrojo masyvo.

const newArray2 = [];
let i = 0;

for(let index of array1)
{
    newArray2[index] = array2[i];
    i++;
}

console.log(newArray2);
