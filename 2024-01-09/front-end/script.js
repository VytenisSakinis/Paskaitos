const registerUsernameElemenet = document.querySelector("#registerUsername"),
registeEmailElemenet = document.querySelector("#registerEmail"),
registerPasswordElemenet = document.querySelector("#registerPasswrod"),
sendRegisterElement = document.querySelector("#sendRegister");

async function register()
{
    const promise = await fetch("http://localhost:3000/register",{
        method: 'POST', 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: "Justinas",
            email: "justinas@bit.lt",
            password: "123321"
        })
    })

    const response = await promise.text();
    console.log(response);
    
}

register();