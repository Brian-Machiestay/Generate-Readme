// function to generate markdown for README
 function generateTitle(data) {
  return `# ${data.title}`;
}

 function generateTable(data = null) {
  return `## Table of Content
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests]
  - [Questions]`
}

 function describe(data) {
  return `## Description
  ${data.title}`
}

 function install(data) {
  return `## Installation
  ${data.title}`
}

 function usage(data) {
  return `## Usage
  ${data.title}`
}

 function license(data) {
  return `## License
  ${data.title}`
}

 function contribute(data) {
  return `## Contributing
  ${data.title}`
}

 function test(data) {
  return `## Tests
  ${data.title}`
}

 function questions(data) {
  return `## Questions
  ${data.title}`
}

module.exports = { generateTitle ,generateTable, describe, install, usage, license, contribute, test, questions }
