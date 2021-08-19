// common function for updating input numbers and price
function updateNumberAndPrice(input, product, price, isIncreasing) {
    const numberInput = document.getElementById(input + "-update");

    const numberInputText = numberInput.value;
    let totalNumber = parseInt(numberInputText);

    if (isIncreasing) {
        totalNumber = totalNumber + 1;
    } else if (totalNumber > 0) {
        totalNumber = totalNumber - 1;
    }
    numberInput.value = totalNumber;

    // update price
    const priceBox = document.getElementById(product + "-price");

    priceBox.innerText = totalNumber * price;

    // cart update
    calculateTotal();

}


function getInput(input){
    const productInput = parseInt(document.getElementById( input +"-update").value);

    return productInput;
}

function calculateTotal() {
  
    const phoneTotal = getInput("number") * 1219;
    const caseTotal = getInput("input") *59;

    const subTotal=phoneTotal + caseTotal;
    const subTotalAmount= document.getElementById("sub-total").innerText=subTotal;

    // adding tax
    const tax=subTotalAmount/10;
    document.getElementById("tax-total").innerText=tax;

    // total cart price
    const totalCartAmount=subTotal+tax;
    document.getElementById("total-cart").innerText=totalCartAmount;

}



// update phone number and price

//update increasing number 

document.getElementById("btn-plus").addEventListener("click", function () {

    updateNumberAndPrice("number", "phone", 1219, true);
})

// update decreasing number

document.getElementById("btn-minus").addEventListener("click", function () {
    updateNumberAndPrice("number", "phone", 1219, false);
})


// update phone case and price

// update increase price
document.getElementById("case-plus").addEventListener("click", function () {
    updateNumberAndPrice("input", "case", 59, true);
});

// update decrease Price

document.getElementById("case-minus").addEventListener("click", function () {
    updateNumberAndPrice("input", "case", 59, false);
});