// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    
    switch(license) {
      case 'None':
        return '';
      case 'Apache Licence 2.0':
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'GNU General Public Licence v3.0':
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      case 'MIT Licence':
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      case 'BSD 2-Clause Simplified License':
        return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
      default:
        return '';
    }
    // 'BSD 3-Clause New or Revised License', 'Boost Software Licence 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public Licence 2.0', 'GNU Affero General Public Licence v3.0', 'GNU General Public Licence v2.0', 'GNU Lesser General Public License v2.1','Mozilla Public License 2.0','The Unlicense'],
  
  } else {
    return false;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

//module.exports = generateMarkdown;
module.exports = { generateMarkdown,  renderLicenseSection, renderLicenseLink, renderLicenseBadge };
