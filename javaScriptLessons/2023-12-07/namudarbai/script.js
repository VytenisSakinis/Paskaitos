// Kazys ir Petras žaidžiai šaškėm. Petras surenka taškų kiekį nuo 10 iki 20, Kazys surenka taškų kiekį nuo 5 iki 25. Vienoje eilutėje išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​. Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartoti tol, kol kažkuris žaidėjas pirmas surenka 222 arba daugiau taškų.

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateArrayOfRandomNumbers(min, max, length){
    for (let i = 0; i < length; i++) array.push(rand(min, max));
    return array;
}




let pointsPetrasSum = 0;
let pointsKazysSum = 0;


while (true)
{
    let pointsPetras = rand(0, 10);
    let pointsKazys = rand(0, 10);
    pointsPetrasSum += pointsPetras;
    pointsKazysSum += pointsKazys;
    if (pointsPetrasSum >= 222) {
        console.log(`Partiją laimėjo: Petras`) 
        break
    } else if (pointsKazysSum >= 222) {
        console.log(`Partiją laimėjo: Kazys`)
        break
    }
}

console.log(`Petro surinkti balai: ${pointsPetrasSum}`);
console.log(`Kazio surinkti balai: ${pointsKazysSum}`);


console.log(`-------------------------------------`)


// Sumodeliuokite vinies kalimą. Įkalimo gylį sumodeliuokite pasinaudodami rand() funkcija. Vinnies ilgis 8.5cm (pilnai sulenda į lentą).
// “Įkalkite” 5 vinis mažais smūgiais. Vienas smūgis vinį įkala 5-20 mm. Suskaičiuokite kiek reikia smūgių.



let nailOne = 0;
let nailTwo = 0;
let nailThree = 0;
let nailFour = 0;
let nailFive = 0;
let attempts = 0;
let attempts2 = 0;
let attempts3 = 0;
let attempts4 = 0;
let attempts5 = 0;

while (true) 
{
    let nailHammer = rand(5, 20);
    nailOne += nailHammer;  
    attempts++;
    if (nailOne >= 850) {
        console.log('Pirma vinis įkalta');  
        break;
    }
}

while (true) 
{
    let nailHammer = rand(5, 20);
    nailTwo += nailHammer;  
    attempts2++;
    if (nailTwo >= 850) {
        console.log('Antra vinis įkalta');  
        break;
    }
}

while (true) 
{
    let nailHammer = rand(5, 20);
    nailThree += nailHammer;  
    attempts3++;
    if (nailThree >= 850) {
        console.log('Trečia vinis įkalta');  
        break;
    }
}

while (true) 
{
    let nailHammer = rand(5, 20);
    nailFour += nailHammer;  
    attempts4++;
    if (nailFour >= 850) {
        console.log('Ketvirta vinis įkalta');  
        break;
    }
}

while (true) 
{
    let nailHammer = rand(5, 20);
    nailFive += nailHammer;  
    attempts5++;
    if (nailFive >= 850) {
        console.log('Penkta vinis įkalta');  
        break;
    }
}



console.log(`Pirmos vinies kalimų skaičius: ${attempts}`);
console.log(`Antros vinies kalimų skaičius: ${attempts2}`);
console.log(`Trečios vinies kalimų skaičius: ${attempts3}`);
console.log(`Ketvirtos vinies kalimų skaičius: ${attempts4}`);
console.log(`Penktos vinies kalimų skaičius: ${attempts5}`);


console.log(`-------------------------------------`)

//  “Įkalkite” 5 vinis dideliais smūgiais. Vienas smūgis vinį įkala 20-30 mm, bet yra 50% tikimybė (pasinaudokite rand() funkcija tikimybei sumodeliuoti), kad smūgis nepataikys į vinį. Suskaičiuokite kiek reikia smūgių.

let nail = 0;
let attempt = 0;

let failedAttempts = 0;
let succesAttempts = 0;

while (true)
{
    let nailHammer = rand(20, 30);
    let chance = rand(0, 1);

    if (chance === 1){
        nail += nailHammer
        succesAttempts++
        attempt++
    }else{
        failedAttempts++
        attempt++
    }

    if (nail >= 850) {
        console.log(`Vinis įkalta ${nail}`)
        break
    }
}

console.log(`Pavykę kalimai ${succesAttempts}`);
console.log(`Nepavykę kalimai ${succesAttempts}`);
console.log(`Viso bandymu ${attempts}`);

console.log(`-------------------------------------`)

nail = 0;
attempt = 0;
failedAttempts = 0;
succesAttempts = 0;

while (true)
{
    let nailHammer = rand(20, 30);
    let chance = rand(0, 1);

    if (chance === 1){
        nail += nailHammer
        succesAttempts++
        attempt++
    }else{
        failedAttempts++
        attempt++
    }

    if (nail >= 850) {
        console.log(`Vinis įkalta ${nail}`)
        break
    }
}

console.log(`Pavykę kalimai ${succesAttempts}`);
console.log(`Nepavykę kalimai ${succesAttempts}`);
console.log(`Viso bandymu ${attempts}`);

console.log(`-------------------------------------`)

nail = 0;
attempt = 0;
failedAttempts = 0;
succesAttempts = 0;

while (true)
{
    let nailHammer = rand(20, 30);
    let chance = rand(0, 1);

    if (chance === 1){
        nail += nailHammer
        succesAttempts++
        attempt++
    }else{
        failedAttempts++
        attempt++
    }

    if (nail >= 850) {
        console.log(`Vinis įkalta ${nail}`)
        break
    }
}

console.log(`Pavykę kalimai ${succesAttempts}`);
console.log(`Nepavykę kalimai ${succesAttempts}`);
console.log(`Viso bandymu ${attempts}`);

console.log(`-------------------------------------`)

nail = 0;
attempt = 0;
failedAttempts = 0;
succesAttempts = 0;

while (true)
{
    let nailHammer = rand(20, 30);
    let chance = rand(0, 1);

    if (chance === 1){
        nail += nailHammer
        succesAttempts++
        attempt++
    }else{
        failedAttempts++
        attempt++
    }

    if (nail >= 850) {
        console.log(`Vinis įkalta ${nail}`)
        break
    }
}

console.log(`Pavykę kalimai ${succesAttempts}`);
console.log(`Nepavykę kalimai ${succesAttempts}`);
console.log(`Viso bandymu ${attempts}`);

console.log(`-------------------------------------`)

while (true)
{
    let nailHammer = rand(20, 30);
    let chance = rand(0, 1);

    if (chance === 1){
        nail += nailHammer
        succesAttempts++
        attempt++
    }else{
        failedAttempts++
        attempt++
    }

    if (nail >= 850) {
        console.log(`Vinis įkalta ${nail}`)
        break
    }
}

console.log(`Pavykę kalimai ${succesAttempts}`);
console.log(`Nepavykę kalimai ${succesAttempts}`);
console.log(`Viso bandymu ${attempts}`);