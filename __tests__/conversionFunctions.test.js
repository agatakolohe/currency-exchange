import { TestScheduler } from 'jest'
import ConversionCalculator from './../src/js/conversionFunctions'

describe('ConversionCalulator', () => {
  
  test('should correctly create a ConversionCalculator object', () => {
    const calculatorTest = new ConversionCalculator("usd", "cad");
    expect(calculatorTest.usd).toEqual("usd");
    expect(calculatorTest.currency).toEqual("cad");
  });
  test('should correctly return the conversion of usd from cad', () => {
    const canadaDollar = new ConversionCalculator(1, 1.3089);
    expect(canadaDollar.showMeTheMoney()).toEqual("1.31");
  });


});