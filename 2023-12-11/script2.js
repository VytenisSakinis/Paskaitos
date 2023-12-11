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

//10

console.log(array);

let sumMiddle = 0;

for (let i = 0; i < array.length; i++)
{
    sumMiddle += array[i];
}

let sumMiddleArray = sumMiddle / array.length;

console.log(sumMiddle);

console.log(sumMiddleArray);

/*
1.Sukurti funkciją, kuri generuoja x kiekį atsitiktinių string'ų, sudarytą iš strLength simbolių. Generavimas nuo A iki Z
2. Patikrinti, ar String masyve egzistuoja reikšmių, prasidedančių bei užsibaigiančių raide A. Jei taip - pranešti kokia šio string pozicija masyve bei šio elemento reikšmė;
3. Išfiltruokite visas masyvo reikšmes, pasidedančias raidėmis: 'X', 'M', 'K'
4. Išfiltruokite visas masyvo reikšmes, kurių viduriniai du simboliai yra vienodi. Sukurkite išfiltruotų reikšmių masyvą;
5. Jei išfiltruotų reikšmių masyve reikšmių mažiau nei 3 - rikiuoti didėjančia, kitu atveju - rikiuoti mažėjančia tvarka.
6. Kiekvienai stringų masyvo reikšmei pridėti po dar vieną atsitiktinę raidę gale;
7. Kiekvieną stringų masyvo elementų reikšmę išrikiuoti pagal abėcėlę didėjančia tvarka
8. Sukurkite naują masyvą atsitiktinėms Sring'ų reikšmėms generuoti. Sugeneruokite atsitiktines String reikšmes iš 4 simbolių tol, kol jame bus žodis XMAS; Išveskite, kiek kartų reikėjo generuoti reikšmes kol buvo gautas toks žodis.
9. Išrikiuokite masyvą priešinga nei abecelės tvarka
10. Atraskite, kurioje masyvo pozicijoje randasi žodis 'XMAS'
*/

const randomString = (length, strLength) => {
    const arrayOfStrings = [];
    for (let i = 0; i < length; i++) arrayOfStrings.push(generateString(strLength)) 
    return arrayOfStrings
}

let arrayOfStrings = randomString(100, 4);

console.log(arrayOfStrings);

// 2. Patikrinti, ar String masyve egzistuoja reikšmių, prasidedančių bei užsibaigiančių raide A. Jei taip - pranešti kokia šio string pozicija masyve bei šio elemento reikšmė;

let some = arrayOfStrings.filter((value) => value[0] === "A" && value[value.length - 1] === "A")

console.log(`=========`);
console.log(some);


// 3. Išfiltruokite visas masyvo reikšmes, pasidedančias raidėmis: 'X', 'M', 'K'

arrayOfStrings = randomString(100, 4);
let newArrayOfStrings = []

newArrayOfStrings = arrayOfStrings.filter((value) => value[0] === "X" || value[0] === "M" || value[0] === "K")

console.log(newArrayOfStrings);

// 4. Išfiltruokite visas masyvo reikšmes, kurių viduriniai du simboliai yra vienodi. Sukurkite išfiltruotų reikšmių masyvą;

arrayOfStrings = randomString(100, 4);
newArrayOfStrings = [];

newArrayOfStrings = arrayOfStrings.filter((value) => value[1] === value[2])

console.log(newArrayOfStrings)

// 5. Jei išfiltruotų reikšmių masyve reikšmių mažiau nei 3 - rikiuoti didėjančia, kitu atveju - rikiuoti mažėjančia tvarka.

if (newArrayOfStrings.length > 3) arrayOfStrings.sort();
else arrayOfStrings.sort().reverse()

console.log(arrayOfStrings)

// 6. Kiekvienai stringų masyvo reikšmei pridėti po dar vieną atsitiktinę raidę gale;


arrayOfStrings = randomString(100, 4)
let modifiedString = []

modifiedString = arrayOfStrings.map((value) => value + generateString(1))

console.log(modifiedString);

// 7. Kiekvieną stringų masyvo elementų reikšmę išrikiuoti pagal abėcėlę didėjančia tvarka

let sortedArray = modifiedString.map(value => value.split('').sort().join(''))

console.log(sortedArray);

// 8. Sukurkite naują masyvą atsitiktinėms Sring'ų reikšmėms generuoti. Sugeneruokite atsitiktines String reikšmes iš 4 simbolių tol, kol jame bus žodis XMAS; Išveskite, kiek kartų reikėjo generuoti reikšmes kol buvo gautas toks žodis.

let amountOfTries = 0
let destroyThePCArray = []

while (true) {
    const randomStringXMAS = generateString(4);
    
    if (randomStringXMAS === "XMAS") {
        destroyThePCArray.push(randomStringXMAS) 
       break
    }
    else {
        destroyThePCArray.push(randomStringXMAS) 
        amountOfTries++;
    }
}

console.log(amountOfTries)
console.log(destroyThePCArray)


// 9. Išrikiuokite masyvą priešinga nei abecelės tvarka

destroyThePCArray.sort();

console.log(destroyThePCArray)