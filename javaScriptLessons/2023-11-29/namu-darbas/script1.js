// function rand(min, max) {
//     return Math.floor(Math.random() * (max - min + 1));
// }

// let skaiciukas = rand(0,2), skaiciukas2 = rand(0,2), skaiciukas3 = rand(0,2), skaiciukas4 = rand(0,2);

// let skaicius = `${skaiciukas}${skaiciukas2}${skaiciukas3}${skaiciukas4}`;
// console.log(skaicius);

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}

let skaiciukas = rand(0, 2),
    skaiciukas2 = rand(0, 2),
    skaiciukas3 = rand(0, 2),
    skaiciukas4 = rand(0, 2);

    console.log(skaiciukas);
    console.log(skaiciukas2);
    console.log(skaiciukas3);
    console.log(skaiciukas4);

let countZero = 0,
    countOne = 0,
    countTwo = 0;

if (skaiciukas === 0) {
    countZero++;
} else if (skaiciukas === 1) {
    countOne++;
} else if (skaiciukas === 2) {
    countTwo++;
}

if (skaiciukas2 === 0) {
    countZero++;
} else if (skaiciukas2 === 1) {
    countOne++;
} else if (skaiciukas2 === 2) {
    countTwo++;
}

if (skaiciukas3 === 0) {
    countZero++;
} else if (skaiciukas3 === 1) {
    countOne++;
} else if (skaiciukas3 === 2) {
    countTwo++;
}

if (skaiciukas4 === 0) {
    countZero++;
} else if (skaiciukas4 === 1) {
    countOne++;
} else if (skaiciukas4 === 2) {
    countTwo++;
}

console.log("Nuliai:", countZero);
console.log("Vienetai:", countOne);
console.log("Dvejetai:", countTwo);
