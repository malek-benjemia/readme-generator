// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    if (license=='None') {return '';};
    if (license=='Apache Licence 2.0') {return '<img src=https://img.shields.io/badge/License-Apache%202.0-blue.svg>';} ;
    if (license=='GNU General Public Licence v3.0'){return '<img src=https://img.shields.io/badge/License-GPLv3-blue.svg>';};
    if (license== 'MIT Licence') {return '<img src=https://img.shields.io/badge/License-MIT-yellow.svg>';};
    if (license== 'BSD 2-Clause Simplified License'){return '<img src=https://img.shields.io/badge/License-BSD%202--Clause-orange.svg>';};
    if (license=='BSD 3-Clause New or Revised License') {return '<img src=https://img.shields.io/badge/License-BSD%203--Clause-blue.svg>';};
    if (license=='Boost Software Licence 1.0') {return '<img src=https://img.shields.io/badge/License-Boost%201.0-lightblue.svg>';};
    if (license=='Creative Commons Zero v1.0 Universal') {return '<img src=https://licensebuttons.net/l/zero/1.0/80x15.png>';};
    if (license=='Eclipse Public Licence 2.0') {return '<img src=https://img.shields.io/badge/License-EPL%201.0-red.svg>';};
    if (license=='GNU Affero General Public Licence v3.0') {return '<img src=https://img.shields.io/badge/License-AGPL%20v3-blue.svg>';};
    if (license=='GNU General Public Licence v2.0') {return '<img src=https://img.shields.io/badge/License-GPL%20v2-blue.svg>';};
    if (license=='GNU Lesser General Public License v2.1') {return '<img src=https://img.shields.io/badge/License-LGPL%20v3-blue.svg>';};
    if (license=='Mozilla Public License 2.0') {return '<img src=https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg>';};
    if (license=='The Unlicense') {return '<img src=https://img.shields.io/badge/license-Unlicense-blue.svg>';}
    else {return '';}
    }
  else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    if (license=='None') {return '';};
    if (license=='Apache Licence 2.0') {return '<a href="https://opensource.org/licenses/Apache-2.0">';} ;
    if (license=='GNU General Public Licence v3.0'){return '<a href="https://www.gnu.org/licenses/gpl-3.0">';};
    if (license== 'MIT Licence') {return '<a href="https://opensource.org/licenses/MIT">';};
    if (license== 'BSD 2-Clause Simplified License'){return '<a href="https://opensource.org/licenses/BSD-2-Clause">';};
    if (license=='BSD 3-Clause New or Revised License') {return '<a href="https://opensource.org/licenses/BSD-3-Clause">';};
    if (license=='Boost Software Licence 1.0') {return '<a href="https://www.boost.org/LICENSE_1_0.txt">';};
    if (license=='Creative Commons Zero v1.0 Universal') {return '<a href="http://creativecommons.org/publicdomain/zero/1.0/">';};
    if (license=='Eclipse Public Licence 2.0') {return '<a href="https://opensource.org/licenses/EPL-1.0">';};
    if (license=='GNU Affero General Public Licence v3.0') {return '<a href="https://www.gnu.org/licenses/agpl-3.0">';};
    if (license=='GNU General Public Licence v2.0') {return '<a href="https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html">';};
    if (license=='GNU Lesser General Public License v2.1') {return '<a href="https://www.gnu.org/licenses/lgpl-3.0">';};
    if (license=='Mozilla Public License 2.0') {return '<a href="https://opensource.org/licenses/MPL-2.0">';};
    if (license=='The Unlicense') {return '<a href="http://unlicense.org/">';}
    else {return '';}
    }
  else {
    return '';
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
   return `This application is covered under ${renderLicenseLink(license)}${license}</a>`
  }
  else {
    return '';
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `# Title: ${answer.title}</br>
${renderLicenseBadge(answer.license)}

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
${renderLicenseSection(answer.license)}

## <span id="contribution">Contributing</span>
${answer.contribution}

## <span id="tests">Tests</span>
${answer.tests}

## <span id="questions">Questions</span>
View Project on <a href="${answer.github}">GitHub</a><br>
For any additional questions, please contact: ${answer.email}`;
}

module.exports = generateMarkdown;

