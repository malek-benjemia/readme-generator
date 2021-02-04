// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//const generatePage = require('./src/page-template');
//const generateMarkdown = require('./src/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [];
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
            return;
          }
          console.log('ReadMe page created successfully!');
        });
};

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(answer => {
        return writeToFile('./dist/test.md',answer);
      })
}

// Function call to initialize app
init();
