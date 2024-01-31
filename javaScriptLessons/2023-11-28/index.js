// Kintamojo deklaravimas su let
let x = 10;
// informacijos isvedimas i console
console.log(x);

//Artimetiniai operatoriai: + - * / % (liekanos operatorius)
x = x % 3;

console.log(x);
// kitas budas
x += 5;

console.log(x);

let loginisPatikrinimas = x < 5;

console.log(loginisPatikrinimas);

console.log(typeof loginisPatikrinimas);
// x += 'tekstas';
if(x < 5)
{
    // typeof tikrina duomenų tipą
    console.log(typeof x);
    console.log(x);
}else{
    console.log('x yra mažesnis nei 5')
}

let tekstas = "labas";

// === sulyginimo operatorius grieztas lyginimas, tikrina tipa
if(tekstas === 'labas')
{
    console.log('tekstas yra labas')
}
// operatorius ne lygu grieztas lyginimas, tikrina tipa
if(tekstas !== "labass")
{
    console.log('tekstas nera lygus labas')
}


let skaicius = "5";
// == operatorius netikrininantis duomenu tipo, taciau tikrinantis reiksme
if(skaicius == 5){
    console.log('skaicius yra 5')
}

let tiesa = "gal ir gerai";

if(1)
{
    console.log(tiesa)
}

let eilerastis = "lorem ipsum dolor sit amet";

console.log(eilerastis);

eilerastis += " consectetur";

console.log(eilerastis);

skaicius = 5;

skaicius += 'filmuok sigucio';
console.log(typeof skaicius);

// jai prie skaiciaus yra pridedamas tekstas, galutinis kintamojo tipas yra skaicius


//tekstas yra indeksuojamas, is jo galime pasiimti raides pagal indeksa
let kintamasis = "CHICKEN";
                //0123456

console.log(kintamasis[0]);
console.log(kintamasis[1]);
console.log(kintamasis[2]);
console.log(kintamasis[3]);
console.log(kintamasis[4]);
console.log(kintamasis[5]);
console.log(kintamasis[6]);

kintamasis = "CHICKEN";
console.log(kintamasis.length);

let vardas = "sylvester";
let pavarde = "stallone";

// if(){
   
// }
// else{

// }

console.log(vardas.length);
console.log(pavarde.length);

if(vardas.length > pavarde.length){
    console.log(pavarde);
}else{
    console.log(vardas);
}