// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![license badge](https://img.shields.io/badge/license-${data.license}-green)
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

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions about this project, please contact me via email at <${data.email}> or [on GitHub](https://github.com/${data.userName})

`;
}

module.exports = generateMarkdown;
