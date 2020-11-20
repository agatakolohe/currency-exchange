import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency.js'

function clearFields() {
  $('#dollarAmount').val("");
}

function getElements(response, inputtedDollar, currencyType) {
  if(response {
    $('#response').text(`$ ${inputtedDollar} in ${currencyType}:`);
    if (currencyType === "canada") {
      let convertCanada = (inputtedDollar * response.conversion_rates.CAD);
      return `${convertCanada}`
    }
  })
}
//User Logic goes here

 //$(document).ready(function() {
// $("form").submit(function(event) {
//     event.preventDefault();
//   });
// });