const people = [];
let currentNumeration = 1;

const buttonElement = document.querySelector('#button');
buttonElement.addEventListener("click", () => {
    const person = {};
    person.firstName = document.getElementById("firstNameInput").value;
    person.lastName = document.getElementById("lastNameInput").value;
    person.age = document.getElementById("ageInput").value;
    person.nationality = document.getElementById("nationalityInput").value;
    person.number = currentNumeration;

    people.push(person);


    currentNumeration++;
    console.log(person);

    generateTableContent(people);
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
const h3 = document.querySelector('#text')

deleteButtonElement.addEventListener("click", () => {
    let deleteInput = parseFloat(document.getElementById('deleteInput').value);
    for(let i = 0; i < people.length; i++){
    if (deleteInput === people[i].number)
    {
        people.splice(i, 1);
        h3.innerHTML = "";
        break;
    }else{
        h3.innerHTML = "Skaičius neatitinka lentelėje esančių skaičių";
    }
}
generateTableContent(people)
})

console.log(people)