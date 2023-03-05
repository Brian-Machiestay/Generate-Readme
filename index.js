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
    }, 
    {
        name: 'descrip',
        message: "let's describe your title, provide something meaningful >> ",
        type: 'input',
        tit: 'Description'
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
        if (i === 0) {
            await inquirer.prompt(questions[i])
            .then((answer) => {
                console.log(answer);
                mark = generateMarkdown(answer);
                console.log(mark);
            })
            .catch((err) => console.log(err))
        }
        else {
            await inquirer.prompt(questions[i])
            .then((ans) => {
                mark = generateMarkdown({descrip: questions[i]['tit']});
                console.log(mark);
                console.log(ans.descrip);
            })
            
        }
    }
}

// function call to initialize program
init().catch((err) => console.log(err.message));
