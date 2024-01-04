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
const modalOpenItem = document.querySelector(".drink")

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

async function filter() {
    const category = categorySelectElement.value,
    glass = glassSelectorElement.value,
    ingredient = ingredientSelectorElement.value,
    searchValue = drinkSearchElement.value;
    
    let filteredArray = [...drinksArray]
    console.log(filteredArray)

    if(searchValue)
    {
        filteredArray = filteredArray.filter((drinkObj) => drinkObj.strDrink.toLowerCase().includes(searchValue.toLowerCase()))
    }
    if(category !=="Pasirinkite kategoriją")
    {
        const dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(" ", "_")}`
        const response = await fetch(dynamicUrl)
        const answerFromServer = await response.json()
        filteredArray = filteredArray.filter((drink) => answerFromServer.drinks.some((drinkFromCategory) => drinkFromCategory.strDrink === drink.strDrink)) 
        console.log(filteredArray);
    }
    if(glass !== "Pasirinkite stiklinę")
    {
        const dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass.replaceAll(" ", "_")}`
        const response = await fetch(dynamicUrl)
        const answerFromServer = await response.json()
        filteredArray = filteredArray.filter((drink) => answerFromServer.drinks.some((drinkFromCategory) => drinkFromCategory.strDrink === drink.strDrink)) 
        console.log(answerFromServer);
    }
    if(ingredient !== "Pasirinkite ingridientą")
    {
        const dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient.replaceAll(" ", "_")}`
        const dynamicContent = []
        const response = await fetch(dynamicUrl)
        const answerFromServer = await response.json()
        for(const drink of answerFromServer.drinks) dynamicContent.push(drink)
        filteredArray = dynamicContent
        console.log(answerFromServer)
    }
    generateDrinksHTML(filteredArray)

    
}

function generateDrinksHTML(drinks) {
    let dynamicHTML = ''
    for(const drink of drinks)
    {
        dynamicHTML += `
        <div class="drink" onclick="openModal(${drink.idDrink})">
            <img
              src="${drink.strDrinkThumb}"
            />
            <p class="title">${drink.strDrink}</p>
          </div>`
    }
    containerHTML.innerHTML = dynamicHTML
}

async function feelingLuckyFunction() {
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    const answerFromServer = await response.json()
    generateDrinksHTML(answerFromServer.drinks)
}

feelingLuckyButtonElement.addEventListener("click", feelingLuckyFunction)

async function openModal(id) {
    modalWindow.style.display = "flex";
    const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const response = await promise.json();
    const drink = response.drinks[0]
    console.log(drink);
    document.querySelector(".thumbnail").src = drink.strDrinkThumb;
    document.querySelector("#modal-category").innerText = drink.strCategory;
    document.querySelector("#modal-alcohol").innerText = drink.strAlcoholic;
    document.querySelector("#modal-glass").innerText = drink.strGlass
    // document.querySelector("#modal-ingredients").innerText = 
}

function closeModal() {
    modalWindow.style.display = "none"
}

modalClosebutton.addEventListener("click", closeModal)



async function initialization()
{
    await fillSelectElements()
    await getAllDrinks();
    generateDrinksHTML(drinksArray)
    searchButtonElement.addEventListener("click", filter);
}



initialization()