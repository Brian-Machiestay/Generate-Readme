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
            writeToFile('RE.md', mark);

        }
        else {
            await inquirer.prompt(questions[i])
            .then((answer) => {
                console.log(answer);
                mark = questions[i]['tit'](answer);
                writeToFile('RE.md', mark);
            })
            .catch((err) => console.log(err))
        }
    }
}

// function call to initialize program
init().catch((err) => console.log(err.message));
