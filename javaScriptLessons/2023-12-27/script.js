// function showMessage(message) {
//     console.log(message)
// }

const showMessage = (message) => {
    console.log(message)
}

// const showMessage = function (message){
//     console.log(message)
// }
// tai kas yra iškvietime tarp skliaustų
showMessage('Labas pasauli')

function findBiggerValue(a, b)
{
    function isABiggerThankB(aValue, bValue){
        return aValue > bValue
    }
    if(isABiggerThankB(a, b)) return a
    else return b
}

console.log(findBiggerValue(getRandomNumber(500, 100), getRandomNumber(500, 100)))

function getRandomNumber(max, min){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(getRandomNumber(115, 100))

function findMaximumValue(... args){
    
}

findMaximumValue(getRandomNumber(1, 600), getRandomNumber(1, 600), getRandomNumber(1, 600), getRandomNumber(1, 600), getRandomNumber(1, 600), getRandomNumber(1, 600), getRandomNumber(1, 600))

const arr = [4, 7, 8, 9, 10, 15, 19]

if (arr.length > 6){
    countAverageSpecial(arr, divideAllElementsByTwo)
}
else{
    multiplyAllElementsByTwo(arr, multiplyAllElementsByTwo)
}

console.log(arr)

function divideAllElementsByTwo(array)
{
    for(let index in array) array[index] /= 2;
    return array
}
function multiplyAllElementsByTwo(array)
{
    for(let index in array) array[index] *= 2
    return array
}

function countAverageSpecial(array, callback)
{
    if(typeof array !== "object") return 0
    const resultArray = callback(array)
    let sum = 0
    for(let value of resultArray)
    {
        sum+=value
    }
    let average = sum / array.length;
    return average
}