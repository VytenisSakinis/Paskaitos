function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}

function categoryOneCalculation(skaicius){
    let rez = skaicius ** 2;
    return rez;
}

let sk = rand(0, 99);

if(sk <= 10){
    let rez = categoryOneCalculation;
    console.log(`Skaicius: ${sk}\t Kategorija: 1,\t Rezultatas: ${rez}`);
}
else if (sk < 20){
    console.log(`Skaicius: ${sk}\t Kategorija: 2,\t Rezultatas: ${sk}`);
}
else if (sk <= 20 && sk < 50 && sk % 2 === 0){
    let desimtys = +sk.toString()[0];
    let rez = sk - desimtys;
    console.log(`Skaicius: ${sk}\t Kategorija: 3,\t Rezultatas: ${rez}`);
}
else if (sk <= 20 && sk < 50 && sk % 2 !== 0)
{
    let vienetai = sk % 10;
    let rez = (sk + vienetai) / 2;
    console.log(`Skaicius: ${sk}\t Kategorija: 4,\t Rezultatas: ${rez}`);
}
else if (sk >= 50 && sk % 3 === 0)
{
    let a = rand(97, 122);
    let b = rand(97, 122);
    let c = rand(97, 122);
    let d = rand(97, 122);
    let string = String.fromCharCode(a) + String.fromCharCode(b) + String.fromCharCode(c) + String.fromCharCode(d);
    console.log(`Skaicius: ${sk}\t Kategorija: 5,\t Rezultatas: ${string}`)
}else{
    console.log(sk);
}
