fetch('https://dog.ceo/api/breeds/image/random')
.then((atsakymas) => 
atsakymas.json()
) //1. gaunamas atsakymas is serverio, norime iskonvertuoti i teksta
.then((atsakymas) => document.write(`<img src="${atsakymas.message}" />`)) // 2. Iskoduotas atsakymas yra panaudojamas

fetch("https://dog.ceo/api/breeds/list/all")
.then((atsakymas) => atsakymas.json())
.then((atsakymas) => {
    console.log(atsakymas);
})