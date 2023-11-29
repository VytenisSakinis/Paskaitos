function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let skaicius1 = rand(5,0);
let skaicius2 = rand(5,0);

console.log(skaicius1);
console.log(skaicius2);

if(skaicius1 > skaicius2){
    let skaicius = skaicius1 / skaicius2;
    let roundedSkaicius = skaicius.toFixed(2);
    console.log(roundedSkaicius);
}else{
    let skaicius = skaicius2 / skaicius1;
    let roundedSkaicius = skaicius.toFixed(2);
    console.log(roundedSkaicius);
}





