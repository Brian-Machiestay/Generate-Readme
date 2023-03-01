const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = ['What is the title of your Readme?',
"Let's describe your readme. Provide"];

// function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, function(err) {
        if (err) throw err;
    })
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
