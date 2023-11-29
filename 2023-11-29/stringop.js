let imone1 = "UAB\t\"Artaleka\""
let imone = "MB\t\"Softo fabrikas\""
console.log(imone);
console.log(imone1);

// \n - new line symbol

let imoniuSarasas = imone1 + '\n' + imone;

console.log(imoniuSarasas);

imoniuSarasas = `${imone1}\n${imone}`;

console.log(imoniuSarasas);

//---------------------------------------

//Duomenu tipo keitimas

let skaiciausTekstas = '12.7';

//parseInt funkcija gauna tik sveikuosius skaicius
let skaicius = parseInt(skaiciausTekstas);

console.log(skaicius);

//unary operator:
skaicius = +skaiciausTekstas;
console.log(skaicius);

//number funkcija:
skaicius = Number(skaiciausTekstas);
console.log(skaicius); //12.7

//math

// Apvalinimas i artimesne puse
let roundedSkaicius = Math.round(skaicius);
console.log('suapvalinta reiksme: ' + roundedSkaicius);

roundedSkaicius = Math.floor(skaicius);
console.log('suapvalinta reiksme i mazaja puse: ' + roundedSkaicius);

roundedSkaicius = Math.ceil(skaicius);
console.log('suapvalinta reiksme i didziaja puse: ' + roundedSkaicius);


//skaiciaus konvertavimas i string duomenu tipa:

skaicius1 = 12.7;
let valiuta = skaicius1.toFixed(2);

console.log(valiuta);

let tekstasSkaicius = skaicius1 + '';

console.log(typeof tekstasSkaicius + ', jo reiksme: ' + tekstasSkaicius);

tekstasSkaicius = skaicius1.toString();
tekstasSkaicius = String(skaicius1);

