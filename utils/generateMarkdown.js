// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if (!license) {
    return '';
  }

  switch(license) {
    case 'The MIT License': 
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'The GPL License':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache License': 
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GNU License':
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
  switch(license) {
    case 'The MIT License': 
      return 'https://opensource.org/licenses/MIT';
    case 'The GPL License':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'Apache License': 
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GNU License':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    default:
      return '';  
  }
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

  ## Description
  ${data.description}
  ## Table Of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  The following necessary dependencies must be installed to run the application, ${data.installations}
  ## Usage
  In order to use this app, ${data.usages}
  ${renderLicenseSection(data.license)}
  This project is licensed under the ${renderLicenseBadge(data.license)}.
  The license link can be found here ${renderLicenseLink(data.license)}.
  ## Contributing
  Contributors: ${data.contribution}
  ## Tests
  The following is needed in order to run the test: ${data.test}
  ## Questions
  If you have any other questions about this project, please contact me directly at ${data.email} or through GitHub at https://github.com/${data.git}.
  

`;
}

module.exports = generateMarkdown;
