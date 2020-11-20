import CurrencyResponse from './../src/js/currencyResponse.js'

describe('CurrencyResponse', () => {
  let testCurrency;

  beforeEach(() => {
    testCurrency = new CurrencyResponse();
  });

  test('it should correctly return the result message of CurrencyResponse', () => {
    expect(testCurrency.result).toEqual("fail");
  });
});