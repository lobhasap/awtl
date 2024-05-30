function calculateTip() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const numberOfPeople = parseInt(document.getElementById('numberOfPeople').value);

    if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numberOfPeople) || numberOfPeople <= 0) {
        document.getElementById('result').textContent = 'Please enter valid inputs.';
        return;
    }

    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    const amountPerPerson = totalAmount / numberOfPeople;

    document.getElementById('result').textContent = 
        `Tip Amount: $${tipAmount.toFixed(2)}\n` + 
        `Total Amount: $${totalAmount.toFixed(2)}\n` + 
        `Amount Per Person: $${amountPerPerson.toFixed(2)}`;
}
