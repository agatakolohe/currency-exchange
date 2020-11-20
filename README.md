# Application Name

#### Description of application, date-2020

#### By Agata Kolodziej

## Description

Purpose usage, detailed explanation what is does and any other information you want users and other developers to have

## Specifications

<details>
  <summary>Expand Specs</summary>

### Describe: functionName()

| Test | Expect |
| ---- | ------ |

</details>

## Setup/Installation Requirements

##### Software Requirements

1. Internet browser
2. A code editor such as VSCode to view and edit the code

##### View Online

- To view in browser click the GH-Pages link: [Name of App](URL)
- what to do when open online

##### Open Locally

- Click on the link to my repository: [My Repository](URL)
- Click on the green "Code" button and copy the repository URL
- Open your terminal and use the command `git clone REPO URL HERE` into the directory you would like to clone the repository
- Open in text editor to view code and make changes
- To install all necessary packages for the project to function:
  - Open terminal and navigate to the project directory.
  - Run the command `npm run install` 


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

CHANGE IF NECESSARY

- HTML
- CSS
- Bootstrap
- JavaScript
- jQuery
- VS Code
- GitHub
- npm
- Webpack

### License

This software is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

Copyright (c) 2020 Agata Kolodziej
