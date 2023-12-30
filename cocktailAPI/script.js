const categorySelectElement = document.querySelector("#categorySelector")
const glassSelectorElement = document.querySelector("#glassSelector")
const ingredientSelectorElement = document.querySelector('#ingredientSelector')
const drinkSearchElement = document.querySelector('#filterByText')
const searchButtonElement = document.querySelector('#searchButton')
const feelingLuckyButtonElement = document.querySelector('#feelingLuckyButton')

fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
.then((response) => response.json())
.then((response) => printDynamicOptionHTML(response, categorySelectElement, "strCategory"))

fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
.then((response) => response.json())
.then((response) => printDynamicOptionHTML(response, glassSelectorElement, "strGlass"))

fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
.then((response) => response.json())
.then((response) => printDynamicOptionHTML(response, ingredientSelectorElement, "strIngredient1"))




function printDynamicOptionHTML(response, element, str)
{
    let dynamicHTML = ''
    const categoryArray = []
    for(let value of response.drinks)
    {
        categoryArray.push(value[str])
    }

    for(let index in categoryArray) dynamicHTML += `<option>${categoryArray[index]}</option>`

    element.innerHTML = dynamicHTML

}


