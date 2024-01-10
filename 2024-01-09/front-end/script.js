const registerUsernameElemenet = document.querySelector("#registerUsername"),
registerEmailElemenet = document.querySelector("#registerEmail"),
registerPasswordElemenet = document.querySelector("#registerPassword"),
sendRegisterElement = document.querySelector("#sendRegister"),
loginUsernameElement = document.querySelector("#loginUsername"),
loginPasswordElement = document.querySelector("#loginPassword"),
loginSubmitButtonElement = document.querySelector("#loginButton")

async function register()
{
    const promise = await fetch("http://localhost:3000/register",{
        method: 'POST', 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: registerUsernameElemenet.value,
            email: registerEmailElemenet.value,
            password: registerPasswordElemenet.value
        })
    })

    const response = await promise.text();
    console.log(response);
    
}

sendRegisterElement.onclick = register;

async function login()
{

        fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: loginUsernameElement.value, 
            password: loginPasswordElement.value
        })

    })
        .then(response => response.json())
        .then(response => (window.location.href = response.url))
        .catch(err => console.log(err))
        

}

loginSubmitButtonElement.onclick = login;
