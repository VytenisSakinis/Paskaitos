
// function pakeistiElementoTeksta()
// {
//     let vardoIvestis = document.querySelector('#vardas');
//     let paragrafas = document.querySelector('.isskirtinis-paragrafas');

//     // elementas.value is inputo istraukia informacija

//     let dataFromInput = vardoIvestis.value; // reiksme is inputo
//     paragrafas.innerText = `Sveiki prisijunge prie pusplapio, ${dataFromInput}` ; // reiksme is inputo priskiriama paragrafui
// }

let loginName = "Aurelis";
let password = "696969"

function login()
{
    let prisijungimoVardoIvestis = document.querySelector('#prisijungimoVardas');
    let prisijungimoSlaptazodzioIvestis = document.querySelector('#prisijungimoSlaptazodis');

    let prisijungimoVardas = prisijungimoVardoIvestis.value;
    let prisijungimoSlaptazodis = prisijungimoSlaptazodzioIvestis.value;

    if(/[A-Z]/.test(prisijungimoSlaptazodzioIvestis) && /[0-9]/.test[prisijungimoSlaptazodzioIvestis])
    {
        console.log('Slaptažodis geras')
    }
    else
    {
        console.log('Pridėkite į slaptažodį (Aa#1) elementus')
    }
}

// /[0-9]/.test(text);