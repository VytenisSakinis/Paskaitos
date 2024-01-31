function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}

let randomNumber = rand(1, 20)
let attempts = 6;
console.log(randomNumber);

function guessNumber()
{
    let inputElement = document.querySelector('#guess-input');
    let resultParagraph = document.querySelector('#rez');
    let guessCountElement = document.querySelector('#count');

    if(attempts === 0) {
        resultParagraph.innerText = `Spėjimų skaičius baigėsi, bandykite dar kartą perkrovę puslapį`;
        return
    }
    
    attempts--;
    guessCountElement.innerText = attempts;
    let inputValue = inputElement.value;

    if(inputValue > randomNumber)
    {
        resultParagraph.innerText = `Spėjimas buvo neteisingas, skaičius yra mažesnis.`;
    }else if(inputValue < randomNumber){
        resultParagraph.innerText = `Spėjimas buvo neteisingas, skaičius yra didesnis.`;
    }else{
        resultParagraph.innerText = `Spėjimas buvo teisingas! Po ${6 - attempts} bandymų`;
    }


}