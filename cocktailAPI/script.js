const categorySelectElement = document.querySelector("#categorySelector")
const glassSelectorElement = document.querySelector("#glassSelector")
const ingredientSelectorElement = document.querySelector('#ingredientSelector')
const drinkSearchElement = document.querySelector('#filterByText')
const searchButtonElement = document.querySelector('#searchButton')
const feelingLuckyButtonElement = document.querySelector('#feelingLuckyButton')
const containerHTML = document.querySelector('.drinks')
const categoriesArray = [], drinksArray = []

async function fillSelectElements() {
    await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
    .then((response) => response.json())
    .then((response) => {
        printDynamicOptionHTML(response, categorySelectElement, "strCategory")
        categoriesArray.push(... response.drinks.map((value) => value.strCategory))
})

    await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
    .then((response) => response.json())
    .then((response) => {
        printDynamicOptionHTML(response, glassSelectorElement, "strGlass")
    })

    await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
    .then((response) => response.json())
    .then((response) => printDynamicOptionHTML(response, ingredientSelectorElement, "strIngredient1"))
}

function printDynamicOptionHTML(response, element, str)
{
    let dynamicHTML = ''
    const categoryArray = []
    for(let value of response.drinks)
                categoryArray.push(value[str])

    for(let index in categoryArray) 
                dynamicHTML += `<option>${categoryArray[index]}</option>`

    element.innerHTML = dynamicHTML
}

async function getAllDrinks() {
    // https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
    for(const category of categoriesArray)
    {
        let dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(" ", "_")}`;
        const response = await fetch(dynamicUrl);
        const answerFromServer = await response.json();
        for(const drink of answerFromServer.drinks)
        drinksArray.push(drink)
    }
    
}

function generateDrinksHTML(drinks) {
    let dynamicHTML = ''
    for(const drink of drinks)
    {
        dynamicHTML += `
        <div class="drink">
            <img
              src="${drink.strDrinkThumb}"
            />
            <p class="title">${drink.strDrink}</p>
          </div>`
    }
    containerHTML.innerHTML = dynamicHTML
}

async function initialization()
{
    await fillSelectElements()
    console.log(categoriesArray);
    await getAllDrinks();
    console.log(drinksArray)
    generateDrinksHTML(drinksArray)
}
initialization()