const billAmountElement = document.querySelector('.moneyAmount'),
tipSelectorElement = document.querySelector('.selector'),
submitButtonElement = document.querySelector('.submitBtn'),
placeholderForOutputElement = document.querySelector('.placeholderForOutputs'),
paymentButtonElement = document.querySelector('.payment')


submitButtonElement.addEventListener('click', () => {
    
    if(billAmountElement.value === "") return alert("Please enter your bill amount")

    if(tipSelectorElement.value === "Select an option") return alert("Please rate us")
    
    const billAmount = +billAmountElement.value 
    const tipSelector = tipSelectorElement.value
    let tip = ""

    if(billAmount < 0) return alert("Please enter a positive bill amount");

    
    if(tipSelector === 'Bad service 0%') tip = 0
    if(tipSelector === "Acceptable service 5%") tip = 5
    if(tipSelector === "Good service 10%") tip = 10
    if(tipSelector === "Excellent service 15%") tip = 15

    

    const tipAmount = billAmount * tip / 100
    const totalAmount = billAmount + tipAmount

    placeholderForOutputElement.innerHTML = `<div class="tips">
        <p>Tips: $<span class="amountOfTips">${tipAmount}</span></p>
    </div>
    <div class="total">
        <p>Total: $<span class="totalAmount">${totalAmount}</span></p>
    </div>
    <button class="payment" onclick="nullifyEverything()">Payment</button>`

    billAmountElement.value = ""
    tipSelectorElement.value = "Select an option"

    
});

function nullifyEverything(){
    placeholderForOutputElement.innerHTML = `<div class="thankYou">
    <span>Thank you for using our services!</span>
    </div>`
}