const categorySelectElement = document.querySelector("#categorySelector")
const glassSelectorElement = document.querySelector("#glassSelector")
const ingredientSelectorElement = document.querySelector('#ingredientSelector')
const drinkSearchElement = document.querySelector('#filterByText')
const searchButtonElement = document.querySelector('#searchButton')
const feelingLuckyButtonElement = document.querySelector('#feelingLuckyButton')
const containerHTML = document.querySelector('.drinks')
const categoriesArray = [], drinksArray = [], selectValues = {}
const modalWindow = document.querySelector(".modal-bg")
const modalClosebutton = document.querySelector(".btn-modal")

function saveToLocalStorage() {
    localStorage.setItem('filteredArray', JSON.stringify(filteredArray))
}


// function to collect the select options from within the API
async function fillSelectElements() {
    const allUrls = ["https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list",
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"]

    const allPromises = allUrls.map(url => 
        fetch(url).then((response) => response.json()))
    
    const allValues = await Promise.all(allPromises);

    const [allCategories, allGlasses ,allIngredients] = allValues

    selectValues.categories = allCategories.drinks.map(categoryObj => categoryObj.strCategory);
    selectValues.glasses = allGlasses.drinks.map(categoryObj => categoryObj.strGlass);
    selectValues.ingredients = allIngredients.drinks.map(categoryObj => categoryObj.strIngredient1);

    printDynamicOptionHTML(selectValues.categories, categorySelectElement)
    printDynamicOptionHTML(selectValues.ingredients, ingredientSelectorElement)
    printDynamicOptionHTML(selectValues.glasses, glassSelectorElement)
}

// function to print the selection options within HTML
function printDynamicOptionHTML(response, element)
{
    let dynamicHTML = ''
    const categoryArray = []
    for(let value of response)
                categoryArray.push(value)

    for(let index in categoryArray) 
                dynamicHTML += `<option>${categoryArray[index]}</option>`

    element.innerHTML += dynamicHTML
}

// function to get all of the items from API
async function getAllDrinks() {
    const allDrinksUrls = []
    for(const category of selectValues.categories)
    {
        let dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(" ", "_")}`;
        allDrinksUrls.push(dynamicUrl)
    }
    const allPromises = allDrinksUrls.map((url) => fetch(url).then(response => response.json()))
    const AllValues = await Promise.all(allPromises)
    AllValues.forEach((value) => drinksArray.push(...value.drinks))
}

// function for item filtration
async function filter() {
    const category = categorySelectElement.value,
    glass = glassSelectorElement.value,
    ingredient = ingredientSelectorElement.value,
    searchValue = drinkSearchElement.value;
    
    let filteredArray = [...drinksArray]
    console.log(filteredArray)

    if(searchValue.length === 1)
    {
        const dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchValue.toLowerCase()}`
        const response = await fetch(dynamicUrl)
        const answerFromServer = await response.json();
        filteredArray = filteredArray.filter((drink) => answerFromServer.drinks.some((drinkFromCategory) => drinkFromCategory.strDrink === drink.strDrink))
        console.log(filteredArray);
    }
    if(searchValue)
    {
        filteredArray = filteredArray.filter((drinkObj) => drinkObj.strDrink.toLowerCase().includes(searchValue.toLowerCase()))
    }
    if(category !== "Choose a category")
    {
        const dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(" ", "_")}`
        const response = await fetch(dynamicUrl)
        const answerFromServer = await response.json()
        filteredArray = filteredArray.filter((drink) => answerFromServer.drinks.some((drinkFromCategory) => drinkFromCategory.strDrink === drink.strDrink)) 
        console.log(filteredArray);
    }
    if(glass !== "Choose a glass")
    {
        const dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass.replaceAll(" ", "_")}`
        const response = await fetch(dynamicUrl)
        const answerFromServer = await response.json()
        filteredArray = filteredArray.filter((drink) => answerFromServer.drinks.some((drinkFromCategory) => drinkFromCategory.strDrink === drink.strDrink)) 
        console.log(answerFromServer);
    }
    if(ingredient !== "Choose an ingredient")
    {
        const dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient.replaceAll(" ", "_")}`
        const response = await fetch(dynamicUrl)
        const answerFromServer = await response.json()
        filteredArray = filteredArray.filter((drink) => answerFromServer.drinks.some((drinkFromCategory) => drinkFromCategory.strDrink === drink.strDrink))
        console.log(answerFromServer)
    }
    generateDrinksHTML(filteredArray)
    localStorage.setItem('filteredArray', JSON.stringify(filteredArray))
}

// function to generate all of the HTMLs dynamically
function generateDrinksHTML(drinks) {
    let dynamicHTML = ''
    for(const drink of drinks)
    {
        dynamicHTML += `
        <div class="drink" onclick="openModal(${drink.idDrink})">
            <div class="drinkContainer">
                <img
                    src="${drink.strDrinkThumb}"
                />
                <p class="title">${drink.strDrink}</p>
            </div>
          </div>`
    }
    containerHTML.innerHTML = dynamicHTML
}

// feeling lucky button function
async function feelingLuckyFunction() {
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    const answerFromServer = await response.json()
    openModal(answerFromServer.drinks[0].idDrink)
}

feelingLuckyButtonElement.addEventListener("click", feelingLuckyFunction)

// modal window opening function
async function openModal(id) {
    modalWindow.style.display = "flex";
    const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const response = await promise.json();
    const drink = response.drinks[0]
    let dynamicIngredients = ""
    console.log(drink);
    document.querySelector(".thumbnail").src = drink.strDrinkThumb;
    document.querySelector("#modal-title").innerText = drink.strDrink;
    document.querySelector("#modal-category").innerText = drink.strCategory;
    document.querySelector("#modal-alcohol").innerText = drink.strAlcoholic;
    document.querySelector("#modal-glass").innerText = drink.strGlass;
    document.querySelector("#modal-recipe").innerText = drink.strInstructions;
    for(let i = 1; i <= 15; i++)
    {
        const ingredient = drink[`strIngredient${i}`]
        const measure = drink[`strMeasure${i}`]

        if(ingredient && measure) {
            dynamicIngredients += `<p><i><b>${ingredient}</b></i> <span>${measure}</span></p>`;
        }
    }
    
    document.querySelector("#modal-ingredients").innerHTML = dynamicIngredients;
}

function closeModal() {
    modalWindow.style.display = "none"
}

function onLoad() {
    const storedDrinks = JSON.parse(localStorage.getItem('filteredArray'));
    if (storedDrinks) {
        generateDrinksHTML(storedDrinks);
    }
};


async function initialization()
{
    await fillSelectElements();
    await getAllDrinks();
    if(!localStorage.getItem('filteredArray')) generateDrinksHTML(drinksArray); // loads items from drinks array if there's no items in Local Storage
    searchButtonElement.addEventListener("click", filter);
}

modalWindow.addEventListener("click", (event) => {
    if (event.target === modalWindow)
    closeModal()
})

// loads items from Local Storage
window.addEventListener('load', initialization)
window.addEventListener('load', onLoad())