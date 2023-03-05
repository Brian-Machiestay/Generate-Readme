// function to generate markdown for README
export function generateTitle(data) {
  return `# ${data.title}`;
}

export function generateTable(data) {
  return `## Table of Content
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests]
  - [Questions]`
}