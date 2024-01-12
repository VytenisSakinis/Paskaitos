const count = document.querySelector(".count");
const substract = document.querySelector(".substract");
const reset = document.querySelector(".reset");
const add = document.querySelector(".add");

substract.addEventListener("click", function() {
    count.innerHTML--
})

reset.addEventListener("click", function(){
    count.innerHTML = 0;
})

add.addEventListener("click", function(){
    count.innerHTML++;
})
