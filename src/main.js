import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currencyAPI.js'


function clearFields() {
  $('#dollarAmount').val("");
}

function getElements(response, inputtedDollar, inputtedCurrencyType) {
  if(response) {
    $('#response').text(`$ ${inputtedDollar} in ${inputtedCurrencyType}:`);
    if (inputtedCurrencyType === "canada") {
      let convertCa= (inputtedDollar * response.conversion_rates.CAD).toFixed(2);
      $('#showMoney').text(`${convertCa}`);
    } else if (inputtedCurrencyType === "euro") {
      let convertEu = (inputtedDollar * response.conversion_rates.EUR).toFixed(2);
      $('#showMoney').text(`${convertEu}`);
    } else if (inputtedCurrencyType === "uk") {
      let convertUk = (inputtedDollar * response.conversion_rates.GBP).toFixed(2);
      $('#showMoney').text(`${convertUk}`);
    } else if (inputtedCurrencyType === "japan") {
      let convertJp = (inputtedDollar * response.conversion_rates.JPY).toFixed(2);
      $('#showMoney').text(`${convertJp}`);
    } else if (inputtedCurrencyType === "poland") {
      let convertPl = (inputtedDollar * response.conversion_rates.PLN).toFixed(2);
      $('#showMoney').text(`${convertPl}`);
    }
  } else {
      $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(inputtedDollar, inputtedCurrencyType){
  const response = await CurrencyExchange.getConversion();
  getElements(response, inputtedDollar, inputtedCurrencyType);
}

//User Logic

 $(document).ready(function() {
$("#moneyExchange").submit(function(event) {
    event.preventDefault();
    let inputtedDollar = parseInt($("input#dollarAmount").val());
    let inputtedCurrencyType = $("input:radio[name=currencyTypes]:checked").val();
    clearFields();
    makeApiCall(inputtedDollar, inputtedCurrencyType);
  });
});