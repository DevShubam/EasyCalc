document.addEventListener('DOMContentLoaded', (event) => {
  // Get input elements
  const totalInput = document.getElementById('total');
  const tipInput = document.getElementById('tip');
  const splitInput = document.getElementById('split');

  // Define the calculateTip function
  function calculateTip() {
    // Get values from inputs
    const total = parseFloat(totalInput.value) || 0;
    const tipPercentage = parseFloat(tipInput.value) || 0;
    const split = parseInt(splitInput.value) || 1;

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

  // Attach event listeners to input fields
  totalInput.addEventListener('input', calculateTip);
  tipInput.addEventListener('input', calculateTip);
  splitInput.addEventListener('input', calculateTip);

  // Hide the calculate button as it's no longer needed
  document.getElementById('calculate').style.display = 'none';
});
