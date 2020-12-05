# Currency Exchanger

#### Asynchrony and APIs Independent Porject for Epicodus, 11-20-2020

#### By Agata Kolodziej

## Description

Sixth independent project for Epicodus to demonstrate my understanding of API calls, correctly parsing data from an API response, handling errors when an API does not return with a 200 OK status, properly storing API keys, async functions and static methods. It is a website to convert a user's inputted USD amount and convert it to their choice of currency. I used the [ExchangeRate-API](https://www.exchangerate-api.com/) and got the free key through the "Free Plan". I created a seperate JS file to clearly fetch the API and parse with json. I used Postman to test my API key and read the response to choose which information I wanted to implement in my site. I used TDD to test my response to correctly select key-values. The site currently offers five different currencies to convert to from USD. 

## Specifications

<details>
  <summary>Expand Specs</summary>

### Describe: CurrencyResponse()

| Test | Expect |
| ---- | ------ |
| It should create CurrencyResponse object | CurrencyResponse().toEqual("success"); |
| It should return conversion rates of CurrencyResponse object | CurrencyResponse.conversion_rates.toEqual("USD": 1, "CAD": 1.3089, "EUR": 0.8440, "GBP": 0.7552, "JPY": 103.9219, "PLN": 3.7779); |
| It should return specific conversion rates | CurrencyResponse.conversion_rates.CAD.toEqual(1.3089); |

### Describe: CurrencyExchange()

| Test | Expect |
| ---- | ------ |
| It will call for the API, return a resolved promise stop any code from being executed until the function is complete and parse the response | getConversion(exchangerateAPI).toEqual(response); |

### Describe: clearFields()
| Test | Expect |
| ---- | ------ |
| It should clear input fields upon submit | clearFields().toEqual( ); |

### Describe: getElements()
| Test | Expect |
| ---- | ------ |
| It should retrieve the parsed API response | getElements(response).toEqual(response.conversion_rates); |
| It should create an array of properties from the conversion_rates object | getElements(Object.keys(conversion_rates)).toEqual(["USD, "CAD", "PLN", "JPY", "GBP"]); |
| It should create an array of values from the conversion_rates object | getElements(Object.values(conversion_rates)).toEqual([1, 1.31, 3.78, 103.92, 0.75]); |
| It should convert USD to a given currency | usdConverstion.toEqual(inputtedDollar * amount); | 
| It should return a response of the inputted dollar amount, converted amount, and currency used | response.toEqual("10 is 13.09 CAD"); |
| It will return an error message if the inputted currency amount is undefined | errorMessage.toEqual("The currency for undefined does not exist. Please select a currency"); |
| It will return an error message if there is an error with the API call | errorMessage.toEqual("There was an error: response;" |

### Describe: makeApiCall()
| Test | Expect |
| ---- | ------ |
| It will call for the API | makeApiCall.toEqual(response) |

</details>

## Setup/Installation Requirements

##### Software Requirements

1. Internet browser
2. A code editor such as VSCode to view and edit the code

##### Obtain API Key

1. You will need to create an account and get an API key at [ExchangeRate-API](https://www.exchangerate-api.com/).
2. Input your email address and click the "Get Free Key" button.
3. You will be prompted to create an account with your email, first name, password and agree to the terms of use. 
4. Fill out the information and click "Get Started!".
5. Access the dashboard to get your API key and see your remaining API calls for the month.
6. Use Postman to test your URL request and API key and view the response. 

##### API Key Setup Instructions

1. Create an .env file in the top level of your directory. 
  - Name your API key variable and paste your API Key from the website

    `API_KEY=xxxxxxxxxxxx`

2. Include .env in your .gitignorefile
3. Call your API by `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`
4. Consult the [ExchangeRate-API](https://www.exchangerate-api.com/) documentation for further information.

##### Open Locally

- Click on the link to my repository: [My Repository](URL)
- Click on the green "Code" button and copy the repository URL
- Open your terminal and use the command `git clone REPO URL HERE` into the directory you would like to clone the repository
- Open in text editor to view code and make changes

- To install all necessary packages for the project to function:
  - Open terminal and navigate to the project directory.
  - Run the command `npm install` 
- To bundle/build project
  - Run the command `npm run build`
- To build and view in browser 
  - Run the command `npm start`


<details>
  <summary><strong>PC Users Please Read</strong></summary>

  If you are on a PC, in package.json please remove `;` and replace with ` & ` in `"scripts: { "start":`

    CHANGE

  `"scripts": {... "start": "npm run build; webpack-dev-server --open --mode development",`

    TO

  `"scripts": {... "start": "npm run build & webpack-dev-server --open --mode development",`

  </details>   


## Known Bugs

If you are using a version of Jest where the coverage directory is not automatically generated, you will need to update package.json file:

`"scripts": {..."test": "jest --coverage"},"jest": { "collectCoverage": true, "coverageReporters": ["html"]},`

## Support and Contact Details

If any errors or bugs occur use Chrome DevTools or please email me, <agatakolohe@gmail.com>

## Technologies Used

- HTML
- CSS
- Bootstrap
- JavaScript
- jQuery
- VS Code
- GitHub
- npm
- Webpack
- [ExchangeRate-API](https://www.exchangerate-api.com/)

### License

This software is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

Copyright (c) 2020 Agata Kolodziej
