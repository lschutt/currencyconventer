const originalAmount = document.querySelector("#entered-amount");
const convertedAmount = document.querySelector("#result-amount");
const oldCurrencyType = document.querySelector("#original-currency-type");
const newCurrencyType = document.querySelector("#converted-currency-type");
const button = document.querySelector("button");

async function convertCurrency(){
  const from = oldCurrencyType.value;
  const to = newCurrencyType.value;
  const amount = originalAmount.value;
  //make api call
  const url = 'https://api.exchangeratesapi.io/latest?base=' + from;
  const response = await fetch(url);
  const data = await response.json();
  //calculate amount
  const rate = data.rates[to];
  const result = amount * rate;
  //display result
  convertedAmount.innerHTML = result + ' ' + to;
}

button.addEventListener("click", convertCurrency);
