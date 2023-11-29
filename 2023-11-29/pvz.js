// let data = '2023-11-29';
// let menuo = data[5] + data[6];

// if(menuo === '01'){
//     console.log('sausis')
// }
// if(menuo === '02'){
//     console.log('vasaris')
// }
// if(menuo === '03'){
//     console.log('kovas')
// }
// if(menuo === '04'){
//     console.log('balandis')
// }
// if(menuo === '05'){
//     console.log('geguze')
// }
// if(menuo === '06'){
//     console.log('birzelis')
// }

let diena = 4;

if(diena === 1){
    console.log('pirmadienis')
}
else if(diena === 2)
{
    console.log('antradienis')
}
else if(diena === 3)
{
    console.log('treciadienis')
}
else if(diena === 4)
{
    console.log('ketvirtadienis')
}
else if(diena === 5)
{
    console.log('penktadienis')
}
else if(diena === 6)
{
    console.log('šeštadienis')
}
else if(diena === 7)
{
    console.log('sekmadienis')
}
else{
    console.log('tai nėra savaitės diena')
}


if(diena <= 7 && diena >= 1) {
        if(diena % 2 === 0)
    {
        console.log('Diena yra lyginė')
    }
    else {
        console.log('Diena yra nelyginė')
    }
}

