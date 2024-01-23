class Color{
    
    constructor(r,g,b){
        if(r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) throw new Error("Blogos reikšmės")
        
        this.r = r;
        this.g = g;
        this.b = b;
    }

    get rgb() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`
    }

    get hex() {
        return `#${this.r.toString(16)}${this.g.toString(16)}${this.b.toString(16)}`
    }

    get hsl() {
        return `hsl(${this.r}, ${this.g}, ${this.b})`
    }
}


const black = new Color(211, 123, 252)
console.log(black.hex);
console.log(black.rgb);
console.log(black.hsl);

class ColorPalette {
    static WHITE = new Color(255, 255, 255)
    static BLACK = new Color(0, 0, 0)
    static BROWN = new Color(165, 42, 42)
    static RED = new Color(255, 0, 0)
    static PINK = new Color(255, 182, 193)
    static ORANGE = new Color(255, 165, 0);
    static YELLOW = new Color(255, 255, 0);
    static GREEN = new Color(0, 128, 0);
    static CYAN = new Color(0, 255, 255);
    static BLUE = new Color(0, 0, 255);
    static PURPLE = new Color(128, 0, 128);

    static colorBlend(color1, color2)
    {
        const r = Math.round((color1.r + color2.r) / 2)
        const g = Math.round((color1.g + color2.g) / 2)
        const b = Math.round((color1.b + color2.b) / 2)

        return new Color(r, g, b)
    }

    
}

const colorBlend = ColorPalette.colorBlend(ColorPalette.PINK, ColorPalette.PURPLE)

console.log(colorBlend);