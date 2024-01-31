const obj = {
    color: 'red',
    name: 'Sigutis',
    //...
}

// kreipimasis į objektus eina per jo pavadinimus, panašiai kaip klasės

console.log(obj.name)

const person = {//JSON, Javascript object notation
    firstName: 'John',
    lastName: 'Wick',
    age: 36,
    nationality: 'United Kingdom',
    isMarried: true,
    kids: ['Sara', 'Dwayne'],
};

console.log(person);

const greetingText = `Hello, my name is ${person.firstName} ${person.lastName}, my age is ${person.age}, I am from ${person.nationality} and my kids are ${person.kids.join(", ")}. And I am ${person.isMarried ? 'Married':'Not married'}`;

console.log(greetingText)

// tuscio objekto sukurimas

const gyvunas = {};

gyvunas.animalType = 'Lion';
console.log(gyvunas);

let laukas = "animalType"

console.log(gyvunas[laukas])
console.log(gyvunas["animalType"])
console.log(gyvunas.animalType)

gyvunas.occupation = 'king of the jungle'

console.log(gyvunas)

const dog = {}
    // breed: "German Shepherd",
    // name: "Angela",
    // age: 7,
    // colors: ["brown", "black"],

    dog.breed = "German Shepherd"
    dog.name = "Angela"
    dog.age = 7
    dog.colors = ["brown", "black"]

for (let property in dog)
{
    console.log(`${property}: ${dog[property]}`)
}

const people = [
    {
        firstName: 'Laura',
        lastName: 'Pedro',
        age: 25,
        nationality: 'Iraq',
    },
    {
        firstName: 'El',
        lastName: 'Pablo',
        age: 45,
        nationality: 'Mexico',
    },
    {
        firstName: 'Tony',
        lastName: 'Soprano',
        age: 55,
        nationality: 'New Jersey',
    }
]

console.log(people[0].firstName, people[0].lastName)
console.log(people[1])

for (let person of people)
{
    console.log(person.firstName, person.lastName);
}