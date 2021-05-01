var crrncy = {
    
    'EUR': {'PLN': 4.15, 'USD': 0.83, 'CAD': 1.57 }, 
    'USD': {'PLN': 3.45, 'EUR': 1.2, 'CAD': 1.28}, 
    'CAD': {'PLN': 2.85, 'USD': 0.78, 'EUR': 0.64 }, 
    'PLN': {'EUR': 0.22, 'CAD': 0.35, 'USD': 0.27}
  
  
}
// DONT CHANGE
var btn = document.querySelector('.calculate-btn');
var baseCurrencyInput = document.getElementById('currency-1');
var secondCurrencyInput = document.getElementById('currency-2');
var amountInput = document.getElementById('amount');
var toShowAmount = document.querySelector('.given-amount');
var toShowBase = document.querySelector('.base-currency');
var toShowSecond = document.querySelector('.second-currency');
var toShowResult = document.querySelector('.final-result');

function convertCurrency(event) {
event.preventDefault();
var amount = amountInput.value;
var from = baseCurrencyInput.value;
var to = secondCurrencyInput.value;
var result = 0;

try{
if (from == to){
result = amount;
} else {
result = amount * crrncy[from][to];
}
}
catch(err) {
result = amount * (1 / crrncy[to][from]);
}

toShowAmount.innerHTML = amount;
toShowBase.textContent = from + ' = ';
toShowSecond.textContent = to;
toShowResult.textContent = result; 
}

btn.addEventListener('click', convertCurrency);
