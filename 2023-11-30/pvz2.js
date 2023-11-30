
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

    if(prisijungimoVardas === loginName && password === prisijungimoSlaptazodis)
    {
        console.log('Prisijungete sekmingai')
    }
    else
    {
        console.log('Prisijungimo duomenys yra blogi')
    }
}

/[0-9]/.test(text);