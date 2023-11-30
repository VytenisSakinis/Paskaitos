function slaptazodzioValidacija() {
    let slaptazodis = document.getElementById('password').value;

    let minLength = 8;
    let hasLetter = /[a-zA-Z]/.test(slaptazodis);
    let hasNumber = /\d/.test(slaptazodis);
    let hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(slaptazodis);

    if (slaptazodis.length >= minLength && hasLetter && hasNumber && hasSpecialChar){
        console.log("Slaptažodis teisingai įvestas")
    }else{
        console.log("Slaptažodis privalo būti ne trumpesnis nei 8 simboliai, pridėkite prie slaptažodžio simbolių, skaičių ir didžiųjų/mažųjų raidžių")
    }
}