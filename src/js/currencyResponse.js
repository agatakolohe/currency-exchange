export default class CurrencyResponse {
  constructor() {
      this.result = "success";
      this.documentation = "https://www.exchangerate-api.com/docs";
      this.terms_of_use = "https://www.exchangerate-api.com/terms";
      this.time_last_update_unix = 1605830406;
      this.time_last_update_utc = "Fri, 20 Nov 2020 00:00:06 +0000";
      this.time_next_update_unix = 1605916926;
      this.time_next_update_utc = "Sat, 21 Nov 2020 00:02:06 +0000";
      this.base_code = "USD";
      this.conversion_rates = 
          "USD = 1, CAD = 1.3089, EUR = 0.8440, GBP = 0.7552, JPY = 103.9219, PLN = 3.7779";
  }
}