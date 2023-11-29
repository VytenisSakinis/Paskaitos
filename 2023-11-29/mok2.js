let eilerastis = "Ruošėsi ožys ganytis, žolę žlemžti, miške vartytis";
console.log(eilerastis);

//ieskoma nuo pradžios
let ozysPositions = eilerastis.indexOf('ožys');
console.log(ozysPositions);

//ieskoma nuo pabaigos
ozysPositions = eilerastis.lastIndexOf('ožys');
console.log(ozysPositions);

//Pasinaudojant gfauta teksto pozicija galima gauti zodi ozys su substring() metodu

// let ozysText = eilerastis.substring(pradPoz, galutinePozicija);
let ozysText = eilerastis.substring(ozysPositions, ozysPositions + 4);
console.log(ozysText);

let kitasGyvunas = 'avinas';

//teksto keitimas
let kitasEilerastis = eilerastis.replaceAll('ožys', kitasGyvunas)

console.log(kitasEilerastis)

//Teksto keitimas pirmam rastam žodžiui

kitasEilerastis = eilerastis.replace('ožys', 'šuo');
console.log(kitasEilerastis);

let eilerastisDidziosiomis = eilerastis.toUpperCase();
console.log(eilerastisDidziosiomis);

let eilerastisMazosiomis = eilerastis.toLowerCase();
console.log(eilerastisMazosiomis);

//slice
let text = "Apple, Banana, Kiwi";

let part = text.slice(7, 13);

console.log(part);

part = text.slice(0, -6); //neigiamas antrasis parametras, nupjauna galinius simbolius

console.log(part);

part = text.slice(7);//simboliu pasalinimas nuo pradžios
console.log(part);

if(eilerastis.includes('ganytis')){
    console.log('kintamajame eilerastis yra zodis: ganytis')
}else{
    console.log('kintamajame eilerastis tokio zodzio nera')
}

function rand(min, max) {
    return Math.floor(math.random() * (max - min + 1)) + min;
}

let skaiciukas = rand(97, 122);
console.log(skaiciukas);

console.log(String.fromCharCode(skaiciukas));