function randomArray2(){
    const array = [];
    const characters = `ABCD`;
for (let i = 0; i < 200; i++)
{
    let random = characters[Math.floor(Math.random()*characters.length)];
    array.push(random);
    
}
return array;
}

let array2 = randomArray2();

console.log(`==================`)
console.log(array2);