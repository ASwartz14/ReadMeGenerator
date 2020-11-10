// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
   ${data.license}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#test)
  - [License](#license)
  - [Questions](#questions)
  
  ## Description
  ${data.description}
  * See the project repository: ${data.repo} on GitHub.
  * Deployed Project: ${data.deployed}
 ## Visuals
 ${data.visuals}
  ## Installation
  ${data.install}
  ## Usage 
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.test}
  ## License
  ${data.license}
  ## Questions
  * Please reach out with any questions.
  **GitHub**: [https://github.com/${data.username}](https://github.com/${data.username})
  **Email**:${data.email}
`;
}

module.exports = generateMarkdown;
