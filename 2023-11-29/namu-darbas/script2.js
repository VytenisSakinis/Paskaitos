function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let skaicius1 = rand(5,0);
let skaicius2 = rand(5,0);

console.log(skaicius1);
console.log(skaicius2);

if(skaicius1 === 0 || skaicius2 === 0) console.log(`Dalyba iš nulio nėra galima`);
else{
    if(skaicius1 > skaicius2) console.log((skaicius1 / skaicius2).toFixed(2));
    else console.log((skaicius2 / skaicius1).toFixed(2));
}








