function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}

function categoryOneCalculation(sk){
    let rez = sk * 3;
    return rez;
}

function catergoryTwoCalculation(sk){
    let calc = sk - 4;
    let rez = calc ** 2;
    return rez;
}

function catergoryThreeCalculation(sk){
    let calc = sk / 5;
    let rez = sk + calc;
    return rez;
}

function categoryFourCalculation(sk){
    let rez = 100 - sk;
    return rez;
}

function categoryFiveCalculation(sk){
    let rez = sk / 4;
    return rez;
}

let sk = rand(0, 99);

console.log(sk);

if(sk <= 5){
    let rez = categoryOneCalculation(sk);
    console.log(`Skaicius: ${sk}\t Kategorija: 1,\t Rezultatas: ${rez}`);
}
else if(sk >= 5  && sk <= 15){
    let rez = catergoryTwoCalculation(sk);
    console.log(`Skaicius: ${sk}\t Kategorija: 2,\t Rezultatas: ${rez}`);
}
else if(sk >= 15 && sk <= 30){
    let rez = catergoryThreeCalculation(sk);
    console.log(`Skaicius: ${sk}\t Kategorija: 3,\t Rezultatas: ${rez}`);
}
else if(sk >= 30 && sk <= 45 && sk % 2 !== 0){
    let rez = categoryFourCalculation(sk);
    console.log(`Skaicius: ${sk}\t Kategorija: 4,\t Rezultatas: ${rez}`);
}
else if(sk >= 45 && sk <= 99 && sk % 10 == 7){
    let rez = categoryFiveCalculation(sk);
    console.log(`Skaicius: ${sk}\t Kategorija: 5,\t Rezultatas: ${rez}`);
}
else if(sk >= 45 && sk <= 99 && sk % 10 == 6){
    let rez = categoryFiveCalculation(sk);
    console.log(`Skaicius: ${sk}\t Kategorija: 5,\t Rezultatas: ${rez}`);
}
