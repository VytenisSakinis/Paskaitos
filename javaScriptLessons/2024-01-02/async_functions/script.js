// Error handlinimas
try {
    
} catch (error) {
    
}

Pažadas

// fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin")
// .then((response)=>response.json())
// .then((response)=>console.log(response))
// .catch((error)=>console.log(error))


// const pazadas = new Promise((resolve, reject) => {
//     let isValidUrl = false;
//     console.log("Prasidėjo")
//     if(isValidUrl){
//     setTimeout(() => resolve('Skambutis'), 1000)
//     }
//     else
//         reject(new Error("Neteisingai nurodytas URL"))
    
//     console.log("Pasibaigė")
// }).then((response) => console.log(response)).catch((error) => console.log(error))

// function callServerSync()
// {
//     console.log("Prasidejo")
//     setTimeout(() => {
//         console.log("gauname atsakyma");}, 1000);

//     console.log('baigesi')
// }

async function callServerAsync() {
    console.log("Užklausa i serveri prasidėjo")
    await new Promise((resolve, reject) => 
        setTimeout(() => {
            console.log("Gauname Atsakyma is serverio")
            resolve();
        }, 1000))

        console.log("Uzklausa baigta")
        return "atsakymas"
}

callServerAsync().then((response) => console.log(response))