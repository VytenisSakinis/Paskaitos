const passwordOutputElement = document.querySelector('#inputHehe'),
passwordLengthSelectElement = document.querySelector('#p-length'),
passwordUpperCaseSelectElement = document.querySelector('#p-uppercase'),
passwordLowerCaseSelectElement = document.querySelector('#p-lowercase'),
passwordNumbersSelectElement = document.querySelector('#p-numbers'),
passwordSymbolSelectElement = document.querySelector('#p-symbols'),
passwordCopyButtonElement = document.querySelector('#copy'),
generatePasswordButtonElement = document.querySelector('#generatePassword')

const empty = "",
uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
lCase = "abcdefghijklmnopqrstuvwxyz",
numbers = "1234567890",
symbols = "!@#$%^&*()_+_}{|?><"

generatePasswordButtonElement.addEventListener("click", () => {
    let initialPassword = empty;

    passwordUpperCaseSelectElement.checked ? (initialPassword += uCase) : ""
    passwordLowerCaseSelectElement.checked ? (initialPassword += lCase) : ""
    passwordSymbolSelectElement.checked ? (initialPassword +=  symbols) : ""
    passwordNumbersSelectElement.checked ? (initialPassword += numbers) : ""

    passwordOutputElement.value = generatePassword(passwordLengthSelectElement.value, initialPassword)
})

function generatePassword(length, initialPassword)
{
    let pass = ""

    for (let index = 0; index < length; index++) {
        pass+= initialPassword.charAt(
            Math.floor(Math.random() * initialPassword.length)
        )   
    }
    return pass
}

passwordCopyButtonElement.addEventListener("click", () => {
    if(passwordOutputElement.value === empty)
    {
        alert("Please Generate Password First!")
    }else{
    navigator.clipboard.writeText(passwordOutputElement.value)
    alert("Password Copied!")
    }
})