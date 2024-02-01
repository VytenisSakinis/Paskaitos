const signInButtonElement = document.querySelector('.signInButton');
const modalWindowElement = document.querySelector('.modalWindow');
const modalWindowBackgroundElement = document.querySelector('.modalBackground');

function closeModal() {
    modalWindowElement.style.display = 'none'
}

signInButtonElement.addEventListener('click', () => {
    modalWindowElement.style.display = 'block'
});

modalWindowBackgroundElement.addEventListener('click', (event) => {
    if (event.target === modalWindowBackgroundElement)
    closeModal();
})