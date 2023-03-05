// function to generate markdown for README
export function generateTitle(data) {
  return `# ${data.title}`;
}

export function generateTable() {
  return `## Table of Content
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests]
  - [Questions]`
}

export function describe(data) {
  return `## Description
  ${data.title}`
}

export function install(data) {
  return `## Installation
  ${data.title}`
}

export function usage(data) {
  return `## Usage
  ${data.title}`
}

export function license(data) {
  return `## License
  ${data.title}`
}

export function contribute(data) {
  return `## Contributing
  ${data.title}`
}

export function test(data) {
  return `## Tests
  ${data.title}`
}

export function questions(data) {
  return `## Questions
  ${data.title}`
}
