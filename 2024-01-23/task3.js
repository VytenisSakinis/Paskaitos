class Vehicle{
    constructor(speed, vehicleMake)
    {
        this.speed = speed + "km/h";
        this.vehicleMake = vehicleMake;
        this.color = "Red";
    }

    honk()
    {
        console.log('Honk honk');
    }
}

class Car extends Vehicle{
    constructor(speed, make, doorCount)
    {
        super(speed, make);
        this.doorCount = doorCount;
    }
    honk()
    {
        console.log('BEEEEEEEEP');
    }
}

const toyota = new Car(90, "Toyota", 2);
toyota.honk();
console.log(toyota);