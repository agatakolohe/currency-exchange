import { TestScheduler } from 'jest'
import ConversionCalculator from './../src/js/conversionFunctions'

describe('ConversionCalulator', () => {
  
  test('should correctly create a ConversionCalculator object', () => {
    const canadaDollar = new ConversionCalculator("usd", "cad");
    expect(canadaDollar.usd).toEqual("usd");
    expect(canadaDollar.currency).toEqual("cad");
  });


});