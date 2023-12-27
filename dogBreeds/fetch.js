let dogBreeds = document.querySelector('#breedsSelect')
let placeHolderForImage = document.querySelector('#placeHolderForImage')

fetch('https://dog.ceo/api/breeds/list/all')
.then((answer) => answer.json())
.then((answer) => dogBreedsSelect(answer))

function dogBreedsSelect(answer) {
    let dynamicHTML = "";
    for (let index in answer.message) {
      if (answer.message[index].length > 0) {
        for (let value of answer.message[index]) {
          dynamicHTML += `<option>${index} ${value}</option>`;
        }
      } else {
        dynamicHTML += `<option>${index}</option>`;
      }
    }
    dogBreeds.innerHTML += dynamicHTML;
  }

  dogBreeds.addEventListener('change', function () {
    let selectedValue = dogBreeds.value;
    
    dogBreedsImage(selectedValue)
  });


  function dogBreedsImage(selectedValue) 
  {
    let spaceChange = selectedValue.replaceAll(' ', '/');
    let linkStringForFetch = `https://dog.ceo/api/breed/${spaceChange}/images/random`
    fetch(linkStringForFetch)
    .then((answer) => answer.json())
    .then((answer) => placeHolderForImage.innerHTML = `<img src="${answer.message}" />`)
  }

