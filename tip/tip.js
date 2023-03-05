function calculateTip() {
    // Get values from inputs
    const total = parseFloat(document.getElementById('total').value);
    const tipPercentage = parseFloat(document.getElementById('tip').value);
    const split = parseInt(document.getElementById('split').value);
  
    // Calculate tip amount and total amount
    const tipAmount = total * (tipPercentage / 100);
    const totalAmount = total + tipAmount;
  
    // Calculate amount per person
    const amountPerPerson = totalAmount / split;
  
    // Display results
    document.getElementById('totalAmount').innerText = '$' + totalAmount.toFixed(2);
    document.getElementById('tipAmount').innerText = '$' + tipAmount.toFixed(2);
    document.getElementById('amountPerPerson').innerText = '$' + amountPerPerson.toFixed(2);
    document.getElementById('results').style.display = 'block';
  }
  