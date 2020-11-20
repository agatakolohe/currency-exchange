import CurrencyResponse from './../src/js/currencyResponse.js'

describe('CurrencyResponse', () => {
  let testCurrency;

  beforeEach(() => {
    testCurrency = new CurrencyResponse();
  });

  test('it should correctly return the result message of CurrencyResponse', () => {
    expect(testCurrency.result).toEqual("success");
  });
  test('it should correctly return the conversion rates of CurrencyResponse', () => {
    expect(testCurrency.conversion_rates).toEqual({"CAD": 1.3089, "EUR": 0.844, "GBP": 0.7552, "JPY": 103.9219, "PLN": 3.7779, "USD": 1});
  });
  test('it should correctly return the conversion rate of CAD', () => {
    expect(testCurrency.conversion_rates.CAD).toEqual(1.3089);
  });
});