const height = document.querySelector(".height"),
weight = document.querySelector(".weight"),
calculate = document.querySelector(".calculate"),
reset = document.querySelector(".reset"),
result = document.querySelector(".results"),
display = document.querySelector(".display-none"),
genderInput = document.querySelector("#genderSelector"),
perfectWeight = document.querySelector(".perfectWeight")

display.style.display = "none";

calculate.addEventListener("click", calBMI);

function calBMI(e) {
    e.preventDefault()

    let heightValue = height.value
    let gender = genderInput.value
    let weightValue = weight.value

    if(!heightValue || isNaN(heightValue)) return result.innerHTML = "Įveskite tinkamą aukštį";
    if(weightValue === "" || isNaN(weightValue)) return result.innerHTML = "Įveskite tinkamą svorį";
    else {
        let heightMeters = heightValue/100

        let bmi = (weightValue/Math.pow(heightMeters, 2)).toFixed(2)
        let maleWeight = (50 + (0.91 * (heightValue - 152.4))).toFixed(2)
        let femaleWeight = (45.5 + (0.91 * (heightValue - 152.4))).toFixed(0) 
        
        display.style.display = "block";

        if(bmi<18.5) {
        showResults(`Underweight ${bmi}`, "orange")
         }
        if(bmi > 18.5 && bmi < 25) {
        showResults(`Normal - ${bmi}`, "green")
         }
        if(bmi > 25 && bmi < 30) {
        showResults(`Overweight - ${bmi}`, "tomato")
         }
        if(bmi > 30) {
        showResults(`Obese - ${bmi}`, "red")
        }
        if(gender === "Male") {
            perfectWeightDisplay(maleWeight)
        }
        if(gender === "Female") {
            perfectWeightDisplay(femaleWeight)
        }
    }

}

function showResults(value, color){
    result.style.backgroundColor = color;
    return result.innerHTML = value
}

function perfectWeightDisplay(value) {
    perfectWeight.innerHTML = `Your perfect weight should be ~${value}`
}

reset.addEventListener("click", resetBMI)

function resetBMI() {
    height.value = "";
    weight.value = "";
    result.innerHTML = "";
    result.style.backgroundColor = "";
    display.style.display = "none";
  }
