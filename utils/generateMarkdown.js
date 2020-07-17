// function to generate markdown for README
function generateMarkdown(data) {
  // we use a regular expression to replace the whitespace in the license string with %20, 
  // this prevents the shields.io URL from breaking
  data.licenseURL = data.license.replace(/\s/g,'%20')
  return `# ${data.title}
  ![license badge](https://img.shields.io/badge/license-${data.licenseURL}-green)
  ## Description 

  ${data.description}


  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)


  ## Installation

  ${data.installation}

  ## Usage 

  ${data.usage}

  ## License

  This project is licensed under the ${data.license} license.

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions about this project, please contact me via email at <${data.email}> or [on GitHub](https://github.com/${data.userName})

`;
}

module.exports = generateMarkdown;
