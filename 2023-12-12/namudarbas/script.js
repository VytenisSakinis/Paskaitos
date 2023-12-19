window.onload = function () {
    const storedPeople = JSON.parse(localStorage.getItem('people'));
    if (storedPeople) {
        people.push(...storedPeople);
        currentNumeration = people.length + 1;
        generateTableContent(people);
    }
};

const people = [];
let currentNumeration = 1;
const possibleNationalities = ['Lithuanian', 'Latvian', 'Greek', 'Estonian', 'German']

const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");
const ageInput = document.getElementById("ageInput");
const nationalityInput = document.getElementById("nationalityInput");
const removeElementInput = document.querySelector("#deleteInput");
const firstNameUpdate = document.getElementById("firstNameUpdate"),
lastNameUpdate = document.getElementById("lastNameUpdate"),
ageUpdate = document.getElementById("ageUpdate"),
nationalityUpdate = document.getElementById("nationalityUpdate"),
selectorID = document.getElementById("selectorID"),
updateButton = document.getElementById("buttonUpdate")

 function saveToLocalStorage() {
    localStorage.setItem('people', JSON.stringify(people))
 }


function validateName(name)
{
    let isValid = true;

    if(!name) isValid = false;
    if(/[0-9]/.test(name) || /[!@#$%^&*()?/.,]/.test(name)) 
    {
        isValid = false;
        console.log("Jūsų varde yra skaičių, arba specialiųjų simbolių")
    }
    return isValid;
}

function validateAge(age)
{
    let isValid = true;
    if(!age) isValid = false
    if(isNaN(parseInt(age))) isValid = false;
    if (age < 0 || age > 200) isValid = false;

    if(age%1 !== 0) isValid = false;
    return isValid;
}

function isValidNationality(nationality){
    possibleNationalities.includes(nationality);
    return possibleNationalities.includes(nationality);
}
function nullifyInputValues(){
    firstNameInput.value = "";
    lastNameInput.value = "";
    ageInput.value = "";
    nationalityInput.value = "";
}
const buttonElement = document.querySelector('#button');
buttonElement.addEventListener("click", () => {
    const person = {};

    person.firstName = firstNameInput.value;
    person.lastName = lastNameInput.value;
    person.age = ageInput.value;
    person.nationality = nationalityInput.value;
    person.number = currentNumeration;

    nullifyInputValues();

    if (
        !validateName(person.firstName) || 
        !validateName(person.lastName) || 
        !validateAge(person.age) || 
        !isValidNationality(person.nationality)
        ) {
            alert("Prašome užpildyti visus laukus")
            return;
            }

    people.push(person);


    currentNumeration++;
    console.log(person);

    generateTableContent(people);
    saveToLocalStorage()
});

function generateTableContent(people)
{
    let dynamicHTML = ``;
  for(let person of people)
  {
    dynamicHTML += `<tr>
    <td>${person.number}</td>
    <td>${person.firstName}</td>
    <td>${person.lastName}</td>
    <td>${person.age}</td>
    <td>${person.nationality}</td>
  </tr>`
  }
  const tbody = document.querySelector('table tbody');
  tbody.innerHTML = dynamicHTML;
}

const deleteButtonElement = document.querySelector('#delete')

deleteButtonElement.addEventListener("click", () => {
    let number = +removeElementInput.value;
    removeElementInput.value = "";

    let foundIndex = people.findIndex((person) => person.number === number)

    if(foundIndex === -1) {
        alert("Žmogus su tokiu numerius neegzistuoja")
        return;
    }
    
    people.splice(foundIndex, 1);

    generateTableContent(people)
    saveToLocalStorage()
})

console.log(people)


const nameUpdate = () => {
    let elementID = +selectorID.value;
    let foundIndex = people.findIndex((person) => person.number === elementID)

    if (foundIndex === -1) {
        alert("Žmogaus su tokiu numeriu nėra")
    }

    people[foundIndex].firstName = firstNameUpdate.value;
    people[foundIndex].lastName = lastNameUpdate.value;
    people[foundIndex].age = ageUpdate.value;
    people[foundIndex].nationality = nationalityUpdate.value;

    selectorID.value = ""
    firstNameUpdate.value = ""
    lastNameUpdate.value = ""
    ageUpdate.value = ""
    nationalityUpdate.value = ""

    generateTableContent(people)
    saveToLocalStorage()
}

updateButton.onclick = nameUpdate;
