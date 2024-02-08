const textContent = document.querySelector('.textContent'),
fetchButton = document.querySelector('.fetchButton')

const fetchFunction = async () =>  {
    const promise = await fetch('https://api.chucknorris.io/jokes/random')
    const response = await promise.json()

    return textContent.innerHTML = response.value
}

fetchButton.addEventListener('click', () => {
    fetchFunction()
})