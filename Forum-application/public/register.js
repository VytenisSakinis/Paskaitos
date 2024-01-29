const username = document.querySelector(".username"),
password = document.querySelector(".password"),
passwordConfirmation = document.querySelector(".confirmPassword"),
email = document.querySelector(".email"),
ageVerify = document.querySelector(".ageVerify"),
profilePicture = document.querySelector(".profilePicture"),
registerButton = document.querySelector("#register")

registerButton.onclick = async () => {
    console.log("veikiu");
    const data = new FormData()
    data.append('username', username.value)
    data.append('password', password.value)
    data.append('email', email.value)
    data.append('birthDate', ageVerify.value)
    data.append('img', profilePicture.files[0])
    const promise = await fetch('http://localhost:3000/api/user/register', 
    {
        method: 'POST',
        body: data,
    })

    const response = await promise.json();
    console.log(response);
}

