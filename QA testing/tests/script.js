function randomNumber(min, max)
{
    const random = Math.floor(Math.random() * (max - min) + min); 
    return random
}

function randomID(length)
{
    let randomNumbers = ''    
    for(let i = 0; i < length; i++) {
    let sum = randomNumber(0, 9)
    randomNumbers += sum
    }
    console.log(randomNumbers);
}

randomID(10)