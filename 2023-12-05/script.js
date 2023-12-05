function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}

let fibonacci = [0, 1];

// fibonacci.push(fibonacci[1] +  fibonacci[0]);

// fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];

for (let i = 2; i < 50; i++){
    fibonacci.push(fibonacci[i - 1] +  fibonacci[i - 2]);
}

console.log(fibonacci);

let atsitiktiniaiSkaiciai = [];

for (let i = 0; i < 10; i++){
    let randomSkaicius = rand(0, 10);
    atsitiktiniaiSkaiciai[i] = randomSkaicius;
}

console.log(atsitiktiniaiSkaiciai)



for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++)
{
    if (atsitiktiniaiSkaiciai[i] % 2 !== 0)
    {
        console.log(atsitiktiniaiSkaiciai[i])
    }

}

console.log('tarpas')

for ( let i = 0; i < atsitiktiniaiSkaiciai.length; i++){
    console.log(atsitiktiniaiSkaiciai[i]);
}

let skaiciai = 0;
console.log(atsitiktiniaiSkaiciai);

for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++){
    
    
    if (atsitiktiniaiSkaiciai[i] === 2){
        skaiciai++;
    }
    
}
console.log(`Skaičių su reikšme 2: \n ${skaiciai}`)

let countFive = 0;

for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++){
    if (atsitiktiniaiSkaiciai[i] < 5) countFive++
}

console.log(`Count of Five: ${countFive}`)

let count = 0

for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++){
    if (atsitiktiniaiSkaiciai[i] < 3 || atsitiktiniaiSkaiciai[i] > 7) count++
}

console.log(`skaiciai mažesni už 3 ir didesni už 7 ${count}`)

let naujasMasyvas = [8, 7, 3, 46, 9, 7];
naujasMasyvas.push(1);

console.log(naujasMasyvas);

// is priekio trynimas
naujasMasyvas.pop();

console.log(naujasMasyvas);

// is galo trynimas
naujasMasyvas.shift();

console.log(naujasMasyvas);

// elemento salinimas pagal indeksa

// masyvoPavadinimas.splice(nuoKurio, iki kurio indekso)
// masyvoPavadinimas.splice(masyvoPavadinimas.length-10, 10)

naujasMasyvas.splice(3, 1);
console.log(naujasMasyvas);

// nuo galo
naujasMasyvas.splice(-1);
console.log(naujasMasyvas);

// pridejimas i masyvo prieki
naujasMasyvas.unshift(12)
console.log(naujasMasyvas);

// masyvo elemento atspausdinimas pasinaudojant delimiteriu

console.log(naujasMasyvas.join(" - "))

// console.log("<li>" + naujasMasyvas.join("</li><li>") + "</li>")

// masyvo apsukimas antraip

naujasMasyvas.reverse();
console.log(naujasMasyvas);

for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++){
    if (atsitiktiniaiSkaiciai[i] % 2 === 0){
        atsitiktiniaiSkaiciai.splice(i, 1);
        i--;
    }
}

console.log(atsitiktiniaiSkaiciai.join(", "))