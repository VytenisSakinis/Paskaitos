function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let number = rand(25,0), number1 = rand(25,0), number2 = rand(25,0);


console.log(number, number1, number2);

if(number>number1 && number<number2){
    console.log(number);
}else if(number<number1 && number>number2){
    console.log(number);

}else if(number1>number && number1<number2){
    console.log(number1);
}else if(number1<number && number1>number2){
    console.log(number1)

}else if(number2>number && number2<number1){
    console.log(number2);
}else {
    console.log(number2)
}




