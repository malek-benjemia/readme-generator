// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//const generateMarkdown = require('./utils/generateMarkdown');


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
            choices: ['None', 'MIT', 'Fake'],
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
const generatePage = (answer) => {
    return `# Title: ${answer.title}

## <span id="description">Description</span>
${answer.description}

## <span id="content">Table of Contents</span>
<a href="#description">Description</a></br>
<a href="#content">Table of Contents</a></br>
<a href="#installation">Installation</a></br>
<a href="#usage">Usage</a></br>
<a href="#license">License</a></br>
<a href="#contribution">Contributing</a></br>
<a href="#tests">Tests</a></br>
<a href="#questions">Questions</a></br>

## <span id="installation">Installation</span>
${answer.installation}

## <span id="usage">Usage</span>
${answer.usage}

## <span id="license">License</span>
${answer.license}

## <span id="contribution">Contributing</span>
${answer.contribution}

## <span id="tests">Tests</span>
${answer.tests}

## <span id="questions">Questions</span>
View Project on <a href="${answer.github}">GitHub</a><br>
For any additional questions, please contact: ${answer.email}`;
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
