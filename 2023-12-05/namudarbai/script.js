function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = [];

let b = [];

let c = [];


let d = [];

let e = [];

let f = [];

a = [0, 1];

for (let i = 0; i < 19; i++)
{
    a[i + 1] = i + 1;
}

console.log(a);

for (let i = 0; i < 20; i++)
{
    b[i] = i + 1;
}

console.log(b);

for (let i = 0; i < 19; i++)
{
    c[i + 1] = i + 1;
}

c.reverse();
console.log(c);

for (let i = 19; i < 39; i++)
{
    d[i + 1] = i + 1;
}

console.log(d);

for (let i = 29; i < 49; i++)
{
    e[i] = i + 1;
}

e.reverse;
console.log(e);

for (let i = 0; i < 10; i++)
{
    let randomSkaiciai = rand(0, 10);
    f[i] = randomSkaiciai;
}

console.log(f);

;
console.log(a.join(" ->"));

console.log(f);

// for (let i = 0; i < f.length; i++)
// {
//     if(f[i] % 2 !== 0){
//         f.splice(i, 1);
//         i--;
//     }
// }

// console.log(f);

// for (let i = 0; i < f.length; i++)
// {
//     if(f[i] % 2 === 0){
//         f.splice(i, 1);
//         i--;
//     }
// }

// console.log(f);

// for (let i = 0; i < f.length; i++)
// {
//     if(f[i] % 3 !== 0){
//         f.splice(i, 1);
//         i--;
//     }
// }

let randomNumbers = []

for (let i = 0; i < f.length; i++)
{
    if(f[i] < 5 || f[i] > 8)
    {
        randomNumbers.push(f[i]);
    }
}

console.log(randomNumbers);

let numbersRandom = []

for (let i = 0; i < f.length; i++)
{
    if(f[i] >= 2 && f[i] <= 6)
    {
        numbersRandom.push(f[i]);
    }
}

console.log(numbersRandom);

let sumOfTwo = [];

for (let i = 0; i < f.length - 1; i++) {
    let sum = [f[i], f[i + 1]];
    let sum2 = sum[0] + sum[1];

    if (sum2 >= 10 && sum2 <= 99) {
        sumOfTwo.push(sum);
    }
}

console.log(sumOfTwo);

let equal = [];

for (let i = 0; i < f.length - 1; i++)
{
    let sum = [f[i], f[i + 1]];
    let sum2 = sum[0] + sum[1];

    if (sum2 % 2 === 0){
        equal.push(sum);
    }
}

console.log(equal);