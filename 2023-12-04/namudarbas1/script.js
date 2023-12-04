function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}

// Pirma

document.addEventListener("DOMContentLoaded", function () {
    let starsContainer = document.getElementById("starsContainer");
    let stars = "";

let i = "";

for (let i = 0; i < 400; i++){
    stars += "*";
    if ((i + 1) % 50 === 0) {
        stars += `\n`;
    }
}
starsContainer.textContent = stars;
});


// antra 

document.addEventListener("DOMContentLoaded", function () {
    let randomNumber = rand(1, 6);
    let randomNumberDiv = document.getElementById("randomNumberDiv");
    randomNumberDiv.innerHTML = `<h${randomNumber}>${randomNumber}</h${randomNumber}>`;
});


// trecia


let number = "";

for (i = 0; i < 3; i++) {
    number = Math.floor(Math.random() * 21) - 10;
    if (number < 0) document.write(`<h3 style="color: green;">${number}</h3>`)
    if (number === 0) document.write(`<h3 style="color: red;">${number}</h3>`)
    if (number > 0) document.write(`<h3 style="color: blue;">${number}</h3>`)
}

// ketvirta 


var str = [
    "An American in Paris",
    "Breakfast at Tiffany's",
    "2001: A Space Odyssey",
    "It's a Wonderful Life",
];

for (let i = 0; i < str.length; i++) {
    let novels = str[i].replace(/[aeiouy]/gi, "");
    document.write(novels + "</br>");
}


let x = 0;
let randomNumber = 0;

for (let i = 0; i < 300; i++) {
    randomNumber = rand(0, 300);
    if (randomNumber > 150) {
        x++
    }
   if (randomNumber > 275) {
    color = "red";
   } else {
    color = "black";
   }
    
    document.write(`<span style="color: ${color};">${randomNumber} |</span>`);
    
}
document.write("</br>Skaičių virš 150:" + "\n" + x)

// sesta

let rez = "";

for (let i = 1; i <= 3000; i++) {
    
    if (i % 77 === 0){
        rez += i;
        if (i !== 3000 && i + 77 <= 3000) {
            rez += ", ";
    }
}
}

document.write("<br>" + rez + "<br>");


let namesArray = [
	'alice', 'bob', 'charlie', 'david', 'emily',
	'frank', 'grace', 'harry', 'isabella', 'jack',
	'kate', 'liam', 'molly', 'nathan', 'olivia',
	'peter', 'quinn', 'rachel', 'steve', 'tina'
];

for (let i = 0; i < namesArray.length; i++) {
    let names = namesArray[i].charAt(0).toUpperCase() + namesArray[i].slice(1);
    if (i == namesArray.length - 1) {
        document.write(names)
    } else {
        document.write(names + ", ");
    }
}
