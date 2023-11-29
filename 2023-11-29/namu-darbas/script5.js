function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let skaiciukas = rand(97, 122);
let skaiciukas2 = rand(97, 122);
let skaiciukas3 = rand(97, 122);

console.log(String.fromCharCode(skaiciukas), String.fromCharCode(skaiciukas2), String.fromCharCode(skaiciukas3));
