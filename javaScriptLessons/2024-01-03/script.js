const allUrls1 = [
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka",
],
allUrls2 = [
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Triple_sec",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Applejack",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka",
],
allUrls3 = [
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Triple_sec",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Applejack",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Brandy",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Lemon_vodka",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Champagne",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Sherry",
];

function fetchData()
{
    const startTime = new Date()
    fetch(allUrls2[0])
    .then((response) => response.json())
    .then((response) => {
        console.log(response);
        const endTime = new Date();
        const duration = endTime.getTime() - startTime.getTime();
        console.log("function - " + duration + "ms")
    })
}


async function fetchDataAsync()
{
    const startTime = new Date()
    const request = await fetch(allUrls2[1]);
    const drinks = await request.json()
    const endTime = new Date();
    const duration = endTime.getTime() - startTime.getTime();
    console.log("async - " + duration + "ms");
}
// fetchData()
// fetchDataAsync()


async function fetchAllDataByIngredient(urls)
{
    for(const url of urls)
    {
        const startTime = new Date()
        const promise = await fetch(url);
        const answer = await promise.json();
        console.log(answer)
        const endTime = new Date();
        const duration = endTime.getTime() - startTime.getTime();
        console.log("async - " + duration + "ms");
    }
}

async function fetchAllDataIngredient(urls)
{
    const startTime = new Date()

    const promises = urls.map((url) => 
    fetch(url).then((response) => response.json()));

    const dataFromAllSources = await Promise.all(promises);

    console.log(dataFromAllSources);

    const endTime = new Date();
    const duration = endTime.getTime() - startTime.getTime();
    console.log("async - " + duration + "ms");
}

fetchAllDataByIngredient(allUrls3)
fetchAllDataIngredient(allUrls3)

const array1 = [1, 2, 3, 4];
const array2 = [... array1];

console.log(array2);
array.push(5)
console.log(array)
console.log(array2)

const [pirmas, , trecias] = array
const [, antras, ,ketvirtas] = array

const obj = {
    id: 4,
    name: "Sigis",
    surname: "Sigimonas",
    age: 1942,
    married: false,
};

const {name, surname, married, id} = obj;

console.log(name, surname, married, id)

const arrayForMap = [1, 2, 3, 4, 5, 6]

const mappedArray = arrayForMap.map((value) => value*2)
console.log(mappedArray)

const filteredArray = arrayForMap.filter((value) => value > 3)

console.log(filteredArray);


//SOME:

const isThereAWantedValue = array1.some((value) => value === 8)

console.log(isThereAWantedValue);