const input = document.querySelector(".inputText");
const button = document.querySelector(".btn");
const result = document.querySelector(".result");

button.addEventListener("click", countVowel);

function countVowel() {
    let vowelCount = 0;
    let inputValue = input.value.toLowerCase();

    for (let index = 0; index < inputValue.length; index++) {
        let letter = inputValue[index];
        console.log(letter)
        if (letter.match(/([a,e,o,u,i])/)) vowelCount++
    }
    result.innerHTML = `${input.value.toUpperCase()} has ${vowelCount} vowels`;
}
