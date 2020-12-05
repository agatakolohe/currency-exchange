import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchange from "./services/currencyAPI.js";

function clearFields() {
  $("#dollarAmount").val("");
}

function getElements(response, inputtedDollar, inputtedCurrencyType) {
  if (response.result === "success") {
    const conversionRates = Object.entries(response.conversion_rates);
    for (const [country, amount] of conversionRates) {
      if (inputtedCurrencyType === country) {
        let usdConversion = (inputtedDollar * amount).toFixed(2);
        $("#response").text(
          `$ ${inputtedDollar} is ${usdConversion} in ${country}`
        );
        break;
      } else if (inputtedCurrencyType === undefined) {
        $(".noCountry").text(
          `The currency for ${inputtedCurrencyType} does not exist. Please select a currency`
        );
      }
    }
  } else {
    $(".showErrors").text(`There was an ExchangeRate API error: ${response["error-type"]}`);
  }
}

async function makeApiCall(inputtedDollar, inputtedCurrencyType) {
  const response = await CurrencyExchange.getConversion();
  getElements(response, inputtedDollar, inputtedCurrencyType);
}

//User Logic

$(document).ready(function () {
  $("#moneyExchange").submit(function (event) {
    event.preventDefault();
    let inputtedDollar = parseInt($("input#dollarAmount").val());
    let inputtedCurrencyType = $(
      "input:radio[name=currencyTypes]:checked"
    ).val();
    clearFields();
    makeApiCall(inputtedDollar, inputtedCurrencyType);
  });
});
