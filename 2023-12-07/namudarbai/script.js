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

console.log(pointsPetrasSum);
console.log(pointsKazysSum);



// Sumodeliuokite vinies kalimą. Įkalimo gylį sumodeliuokite pasinaudodami rand() funkcija. Vinnies ilgis 8.5cm (pilnai sulenda į lentą).
// “Įkalkite” 5 vinis mažais smūgiais. Vienas smūgis vinį įkala 5-20 mm. Suskaičiuokite kiek reikia smūgių.
//  “Įkalkite” 5 vinis dideliais smūgiais. Vienas smūgis vinį įkala 20-30 mm, bet yra 50% tikimybė (pasinaudokite rand() funkcija tikimybei sumodeliuoti), kad smūgis nepataikys į vinį. Suskaičiuokite kiek reikia smūgių.


let nailOne = 0;
let nailTwo = 0;
let nailThree = 0;
let nailFour = 0;
let nailFive = 0;
let attempts = 0;


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

console.log(attempts);
console.log(nailOne);

