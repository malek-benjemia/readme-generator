// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//const generateMarkdown = require('./src/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [ 'What is the title of your project?:',
                    'Provide a description:', 
                    'Provide installation instructions:', 
                    'Provide usage information:',
                    'Provide contribution guidelines:', 
                    'Provide test instructions:',

                    'Please select a license:',
                    'Provide a GitHub username:',
                    'Provide an email address:'
                ];
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log(questions[0]);
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log(questions[1]);
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2],
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log(questions[2]);
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3],
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log(questions[3]);
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[4],
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log(questions[4]);
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: questions[5],
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log(questions[5]);
                return false;
              }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: questions[6],
            choices: ['None', 'MIT']
        },
        {
            type: 'input',
            name: 'github',
            message: questions[7],
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log(questions[7]);
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: questions[8],
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log(questions[8]);
                return false;
              }
            }
        }

    ]);
};

// TODO: Create a function to write README file
const generatePage = (answer) => {
    return `# Title
${answer.title}

## Description
${answer.description}

## Table of Contents

## Installation
${answer.installation}

## Usage
${answer.usage}

## License
${answer.license}

## Contributing
${answer.contribution}

## Tests
${answer.tests}

## Questions
GitHub profile: ${answer.github}
For any question, please contact: ${answer.email}`;
  };

// Create a function to save the file
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
        return writeToFile('./dist/README.md',generatePage(answer));
      })
}

// Function call to initialize app
init();
