const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { resolve } = require("path");
const { text } = require("express");

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
        message: "Add a step by step installation, type 'done' in the next promt if you're done. \n Wrap code snippet in ``",
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
    },
    {
        name: 'contribute',
        message: 'How can other developers contribute to your software? provide guidelines',
        type: 'input',
        tit: generateMarkdown.contribute,
    },
    {
        name: 'test',
        message: 'provide tests instructions. Wrap code snippets in ``',
        tit: generateMarkdown.test,
    },
    {
        name: 'questions',
        message: 'How would developers reach you if they have questions?',
        tit: generateMarkdown.questions,
    }
]
// function to write README file
async function writeToFile(fileName, data) {
    await fs.promises.appendFile(fileName, data, function(err) {
        if (err) throw err;
    })
}

// function to initialize program
async function init() {
    let mark;
    const all_mark = []
    for (let i = 0; i < questions.length; i++) {
        let contri = [];
        if (questions[i]['name'] === 'contribute') {
            console.log(questions[i]['message'])
            console.log("type 'done' in the next promt when done.\n Wrap code snippets in ``");
            let answer = {'step': ''};
            while (answer.step !== 'done') {
                answer = await inquirer.prompt({name: 'step', type: 'input', message: 'next step >>>'});
                if (answer.step !== 'done') contri.push(answer.step);
            }
            mark = questions[i]['tit'](contri);
            all_mark.push(mark);

        }
        else if (questions[i]['name'] === 'questions') {
            console.log(questions[i]['message'])
            console.log("type 'done' in the next promt when done.\n Wrap code snippets in ``");
            ans = [];
            ques = ['Enter your email address', 'enter your github username']
            for (let i = 0; i < ques.length; i++) {
                answer = await inquirer.prompt({name: 'details', type: 'input', message: `${ques[i]} >>>`});
                ans.push(answer.details);
            }
            mark = questions[i]['tit'](ans);
            all_mark.push(mark);
        }
        else if (questions[i]['name'] === 'test') {
            const testinc = [];
            console.log(questions[i]['message'])
            console.log("type 'done' in the next promt when done");
            let answer = {'step': ''};
            while (answer.step !== 'done') {
                answer = await inquirer.prompt({name: 'step', type: 'input', message: 'next step >>>'});
                if (answer.step !== 'done') testinc.push(answer.step);
            }
            mark = questions[i]['tit'](testinc);
            all_mark.push(mark);
        }
        
        
        else if (questions[i]['name'] === 'install') {
            let ob = [];
            console.log(questions[i]['message'])
            let answer = {'step': ''};
            while (answer.step !== 'done') {
                answer = await inquirer.prompt({name: 'step', type: 'input', message: 'next step >>>'});
                if (answer.step !== 'done') ob.push(answer.step);
            }
            mark = generateMarkdown.install(ob);
            all_mark.push(mark);

        }
        else if (questions[i]['name'] === 'license') {
            await inquirer.prompt(questions[i])
            .then((answer) => {
                mark = questions[i]['tit'](answer);
                all_mark.push(mark);
                const id = questions[i].choices.indexOf(answer.license);
                all_mark[0] = all_mark[0] + questions[i].choiceLinks[id] + '  \n';
            })
            .catch((err) => console.log(err))
        }
        else {
            await inquirer.prompt(questions[i])
            .then((answer) => {
                mark = questions[i]['tit'](answer);
                all_mark.push(mark);
            })
            .catch((err) => console.log(err))
        }
    }
    console.log(all_mark);
    for (let i = 0; i < all_mark.length; i++) {
        await writeToFile('README.md', all_mark[i]);
    }
}

// function call to initialize program
init().catch((err) => console.log(err.message));
