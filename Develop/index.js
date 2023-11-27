// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// fs is a Node standard library package for reading and writing files
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'projectTitle',
  },
  {
    type: 'input',
    message: 'Please give a brief description of your project.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Please provide some installation instructions for your project.',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Please provide some usage instructions for your project.',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'Which license would you like to use?',
    name: 'license',
    choices: ['None', 'MIT License', 'Apache License 2.0', 'GNU GPL v3', 'ISC License']
  },
  {
    type: 'input', 
    name: 'github', 
    message: 'Enter your GitHub username: '
  },
  {
    name: 'email', 
    type: 'input', 
    message: 'Enter your email adress: '
  }
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
let contents = `
## Title
${response.projectTitle}

## Description
${response.description}

## Installation Instructions
${response.installation}

## Usage Instructions
${response.usage}

## License
${response.license}

## Github Username
${response.github}

## Email Address
${response.email}

`


    fs.writeFile('readme.md', contents , (err) =>
    err ? console.error(err) : console.log('Success!')
  );}
    );
  




}

// Function call to initialize app
init();
