// function to generate markdown for README
function generateMarkdown(data) {
  if (data.hasOwnProperty('title')) return `# ${data.title}`;
  else return `# ${data.descrip}`;
}

module.exports = generateMarkdown;
