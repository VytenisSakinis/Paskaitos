const categorySelectElement = document.querySelector("#categorySelector")
const glassSelectorElement = document.querySelector("#glassSelector")
const ingredientSelectorElement = document.querySelector('#ingredientSelector')
const drinkSearchElement = document.querySelector('#filterByText')
const searchButtonElement = document.querySelector('#searchButton')
const feelingLuckyButtonElement = document.querySelector('#feelingLuckyButton')
const containerHTML = document.querySelector('.drinks')
const categoriesArray = [], drinksArray = [], selectValues = {}

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
    for(const category of selectValues.categories)
    {
        let dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(" ", "_")}`;
        const response = await fetch(dynamicUrl);
        const answerFromServer = await response.json();
        for(const drink of answerFromServer.drinks)
        drinksArray.push(drink)
    }
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
        
    }
    generateDrinksHTML(filteredArray)

    
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
    await getAllDrinks();
    generateDrinksHTML(drinksArray)
    searchButtonElement.addEventListener("click", filter);
}



initialization()