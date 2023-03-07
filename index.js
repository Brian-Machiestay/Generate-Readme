const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        name: 'title', 
        message: 'What is the title of your Readme? >> ', 
        type: 'input',
        tit: generateMarkdown.generateTitle
    }, 
    {
        name: 'title',
        message: "let's describe your title, provide something meaningful >> ",
        type: 'input',
        tit: generateMarkdown.describe
    },
    {
        name: 'content',
        message: "I am adding a table of content for you",
        tit: generateMarkdown.generateTable,
        waitUserInput: false,
    },
    {
        name: 'install',
        message: "Add a step by step installation, type 'done' in the next promt if you're done",
        tit: generateMarkdown.install,
    },
    {
        name: 'usage',
        message: 'Enter usage information',
        tit: generateMarkdown.usage,
    },
    {
        name: 'license',
        message: 'choose a license',
        type: 'list',
        choices: ['Boost Software License 1.0', 'Eclipse Public License 1.0', 
        'The MIT License', 'Mozilla Public License 2.0', 'IBM Public License Version 1.0'],
        tit: generateMarkdown.license,
        choiceLinks: ['[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
        '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
        '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
        '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)']
    }
]
// function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, function(err) {
        if (err) throw err;
    })
}

// function to initialize program
async function init() {
    let mark;
    const all_mark = []
    for (let i = 0; i < questions.length; i++) {
        let ob = [];
        if (questions[i]['name'] === 'install') {
            console.log(questions[i]['message'])
            let answer = {'step': ''};
            while (answer.step !== 'done') {
                answer = await inquirer.prompt({name: 'step', type: 'input', message: 'next step >>>'});
                if (answer.step !== 'done') ob.push(answer.step);
            }
            mark = generateMarkdown.install(ob);
            console.log(mark);
            all_mark.push(mark);

        }
        else {
            await inquirer.prompt(questions[i])
            .then((answer) => {
                mark = questions[i]['tit'](answer);
                all_mark.push(mark);
                console.log(mark);
                console.log(answer)
            })
            .catch((err) => console.log(err))
        }
    }
}

// function call to initialize program
init().catch((err) => console.log(err.message));
