export default class ConversionCalculator {
  constructor(usd, currency) {
    this.usd = usd;
    this.currency = currency;
  }
  showMeTheMoney() {
    return (this.usd * this.currency).toFixed(2);
  } 
}