class Rectangle{
    constructor(width, height)
    {
        this.width = width;
        this.height = height;
        // this.area = width * height;
        // this.perimeter = 2 * (width + height);
    }

    calculateArea()
    {
        return this.width * this.height;
    }

    calculatePerimeter()
    {
        return 2 * (this.width + this.height);
    }

    get area(){
        return this.width * this.height;
    }

    get perimeter(){
        return 2 * (this.width + this.height);
    }
}

const rectangle = new Rectangle(10, 20);
const rectangle2 = new Rectangle(16, 223);
console.log(rectangle.calculateArea());
console.log(rectangle2.calculatePerimeter());

console.log(rectangle.area);