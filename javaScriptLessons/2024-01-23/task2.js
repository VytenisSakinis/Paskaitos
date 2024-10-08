class Circle{
    constructor(radius)
    {
        this.radius = radius;
    }

    get area()
    {
        return Math.PI * this.radius ** 2;
    }

    get perimeter()
    {
        return 2 * Math.PI * this.radius;
    }
}

const circleK = new Circle(7);
console.log(circleK.area);
console.log(circleK.perimeter);