// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [ 'Provide a project title (Required):',
                    'Provide a description (Required):', 
                    'Provide installation instructions (Required):', 
                    'Provide usage information (Required):',
                    'Provide contribution guidelines (Required):', 
                    'Provide test instructions (Required):',
                    'Please select a license (Required - Select only one):',
                    'Provide a GitHub username (Required):',
                    'Provide an email address (Required):'
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
                return false;
              }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: questions[6],
            choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause Simplified License', 'BSD 3-Clause New or Revised License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1','Mozilla Public License 2.0','The Unlicense'],
            validate: nameInput => {
                if (nameInput.length==1) {
                  return true;
                } else {
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'github',
            message: questions[7],
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
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
                return false;
              }
            }
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
        return writeToFile('./dist/README.md',generateMarkdown(answer));
      })
}

// Function call to initialize app
init();
