const button = document.querySelector(".btn"),
input = document.querySelector(".input"),
result = document.querySelector(".result");

const palindrome = () => {
    const inputValue = input.value;
    let len = inputValue.length;
    let start = inputValue.substring(0, Math.floor(len/2)).toLowerCase()
    let end = inputValue.substring(len-Math.floor(len/2))
    let flip = end.split("").reverse().join("");
    console.log(len)

    if (!/^[A-Za-z]+$/.test(inputValue)) result.innerHTML = "Įveskite raides"
    else if (start === flip) result.innerHTML = `${inputValue} yra palindrominis`
    else result.innerHTML = `${inputValue} nėra palindrominis`

}

button.addEventListener("click", palindrome)