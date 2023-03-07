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
  return `## Usage  \n
  ${data.usage}  \n`
}

 function license(data) {
  return `## License  \n
This software uses ${data.license}  \n`
}

 function contribute(steps) {
  let text =  `## Contributing  \n`;
  for (let step of steps) {
    text = text + ` - ${step}  \n`;
  }
  return text;
}

 function test(test) {
  let text = '## Tests  \n'
  for (let step of test) {
    text = text + ' - ' + step + '  \n';
  }
  return text;
}

 function questions(data) {
  return `## Questions
  ${data.title}`
}

module.exports = { generateTitle ,generateTable, describe, install, usage, license, contribute, test, questions }
