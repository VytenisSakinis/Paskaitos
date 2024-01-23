// const object = {
//     sayHello() {
//         console.log('haaayaaa');
//     },
//     sayonara: () => {
//         console.log('sayonara');
//     },
//     blob: function () {
//         console.log('blob');
//     }
// };

// object.sayHello();
// object.sayonara()

class Person{

    static countOfPeople = 0;
    constructor(name, height, nationality)
    {
        this.name = name;
        this.height = height;
        this.nationality = nationality;
        Person.countOfPeople++;
    }

    //Method
    sayHello()
    {
        console.log(`Labas, aš ${this.name}`);
    }

    //Static Method
    static countArea(height, width)
    {
        return console.log(height * width);
    }
}

const petras = new Person("Sigis", 1.95, "Doesnt know");
const sigis = new Person("Petras", 1.30, "Where? There");
console.log(petras);
console.log(sigis);

petras.sayHello();
sigis.sayHello();

Person.countArea(155, 25234);
console.log(Person.countOfPeople);