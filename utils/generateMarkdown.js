// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if (!license) {
    return '';
  }

  switch(license) {
    case 'MIT': 
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'GPL':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache': 
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GNU':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    default:
      return '';  
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return '';
  }

  return `[License](${license})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''; 
  }

  return `## License
  
  This project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.Username}/${data.Title}
  ## Description
  ${data.Description}
  ## Table Of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions?](#questions?)
  ## Installation
  The following necessary dependencies must be installed to run the application, ${data.Installations}
  ## Usage
  In order to use this app, ${data.Usages}
  ${renderLicenseSection(data.License)}
  This project is licensed under the ${renderLicenseBadge()} license.
  The license link can be found here ${renderLicenseLink}.
  ## Contributing
  Contibutors: ${data.Contribution}
  ## Tests
  The following is needed in order to run the test: ${data.Test}
  ## Questions
  If you have any questions about the repo or want to open an issue or contact ${data.Usages}

`;
}

module.exports = generateMarkdown;
