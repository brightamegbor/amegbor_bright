import { currencyCoverter } from './module/currency_coverter.js';

document
    .getElementById('amountToConvert')
    .addEventListener('keyup', convertCurrency);

function convertCurrency() {
    let amountString = document.getElementById('amountToConvert').value;

    let convertGHS = currencyCoverter(parseFloat(amountString));

    document.getElementById('convertedResult').innerHTML =
        convertGHS.join('<br />');
}
