function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}



function generateArrayOfRandomNumbers(min, max, length = 10){
    let array = [];
        for (let i = 0; i < length; i++)
        {
            array.push(rand(min, max));
        }
        return array;
}

const generateArrayOfRandomNumbers2 = (min, max, length = 10) => {
    let array = [];
        for (let i = 0; i < length; i++)
        {
            array.push(rand(min, max));
        }
        return array;
}
// nekintamumas, geroji praktika, optimizavimas tam tikrų sistemų
const array = generateArrayOfRandomNumbers2(1, 99, 20);

let array2 = array;

console.log(array);
console.log(array2);

array2.push(1);

console.log(array);
console.log(array2);

const array3 = [];
array3.push(10);
array3.push(1);
array3.push(9);
console.log(array3);
array3.splice(-1);
console.log(array3);

const array4 = generateArrayOfRandomNumbers2(1, 99, 20);
console.log(array4);

let sum = 0;
// senoji darbo su masyvais sintaksė
for(let i = 0; i < array4.length; i++)
{   
    sum += array4[i];
}
let average = sum / array4.length;
console.log(average);

const array5 = generateArrayOfRandomNumbers2(1, 1000, 23);
sum = 0;
console.log(array5)

// for of ciklas skirtas objektams ir masyvams, eina per visas reikšmes:
for (let value of array5)
{
    sum += value;
}

average = sum / array5.length;
console.log(average);

//  for in ciklas
// gražina einamojo masyvo elemento indekso reikšmę

const array6 = generateArrayOfRandomNumbers(1, 1000, 30);
sum = 0;
console.log(array6);

for (let index in array6)
{
    sum += array6[index];
}

average = sum / array6.length;
console.log(average);

console.log(`----------------1----------------`)
for (let x of array6)
{
    console.log(x)
}
console.log(`----------------2----------------`)
for (let x in array6)
{
    // console.log(x)
}

for(let i = 70; i >= 0; i--)
{
    // console.log(i);
}

let arrayTest = generateArrayOfRandomNumbers(1, 20, 100);

for (let index in arrayTest)
{
    if(arrayTest[index] % 2 === 0) arrayTest.splice(index, 1);
}

// console.log(arrayTest); 

const masyvas = [6, 2, 9, 5, 12];

let filteredValues = masyvas.filter((num) => num > 7);
// praėję filtrą elementai palieka filteredValues masyve
 console.log(filteredValues);
 console.log(masyvas);

 const vardai = [`Petras`, `Juozas`, `Bartalomėjus`, `Sigutis`]

 console.log(vardai);

 let filteredVardai = vardai.filter((val) => val.length >= 6 && val[0] === "P" && val[val.length - 1] === "s")

 console.log(filteredVardai);

 let masyvas2 = [6, 2, 9, 5, 12];

 console.log(masyvas2)
// Map atlieka operacijas su visais masyvo elementais
 let modifikuotasMasyvas = masyvas2.map((value, index)=>
 {
    if(value > 5)
    {
        return value + `šiandien galimai buvo diena`;
    }else {
        return value;
}
})

let masyvas3 = [6, 2, 9, 5, 12];

 console.log(modifikuotasMasyvas);

//  Reduce - gražina rezultatą operacijos su visais elementais

console.log(masyvas3);

let suma = masyvas3.reduce((total, value) => total + value);

console.log(suma/masyvas.length);

// tikrinimas ar bent v9ienas is masyvo elementu atitinka patikrinima
let some = masyvas3.some((value) => value === 12);

console.log(some);

// every
// tikrina ar visi elementai praeina is masyvo patikrinima
let isEveryNumberLargerThan2 = masyvas3.every((value) => value > 1)

console.log(isEveryNumberLargerThan2);

let arrayTestas = [];
arrayTestas = generateArrayOfRandomNumbers(0, 100, 100);

console.log(arrayTestas);

arrayTestas.sort((a, b) => {
    return b - a;
});

console.log(arrayTestas)