function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}

let kint = new Array(4);
console.log(kint);
kint[0] = rand(0, 2);
kint[1] = rand(0, 2);
kint[2] = rand(0, 2);
kint[3] = rand(0, 2);
//prideda nauja elementa i gala
// kint.push(10);
console.log(kint);

let count = new Array(3).fill(0);

if(kint[0] === 0) count[0]++;
else if(kint[0] === 1) count[1]++;
else count[2]++

if(kint[1] === 0) count[0]++;
else if(kint[1] === 1) count[1]++;
else count[2]++

if(kint[2] === 0) count[0]++;
else if(kint[2] === 1) count[1]++;
else count[2]++

if(kint[3] === 0) count[0]++;
else if(kint[3] === 1) count[1]++;
else count[2]++

console.log(`Skaičių 0 - ${count[0]}\t 1 - ${count[1]},\t 2 - ${count[2]}`)