// function to generate markdown for README
 function generateTitle(data) {
  return `# ${data.title}  
  \n`;
}

 function generateTable(data = null) {
  return `## Table of Content  \n
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)  
  \n`
}

 function describe(data) {
  return `## Description
${data.title}  
\n`
}

 function install(steps) {
  let text =  '## Installation  \n'
  for (let step of steps) {
    text = text + ` - ${step}  \n`;
  }
  return text;
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
