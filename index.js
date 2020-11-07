const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');

const genRmMd = generateMarkdown(data);
// array of questions for user
const questions = [{
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the project description?",
        name: "description"
    },
    {
        type: "input",
        message: "How do you install project?",
        name: "install"
    },
    {
        type: "checkbox",
        message: "Please select the licence you wish to use for this project.",
        name: "license",
        choices: [
            "MIT",
            "GNU GPLv3",
            "Mozilla PL 2.0",
            "Apache 2.0",
            "Boost Software 1.0",
            "Unlicense/Other"
        ]
    },
    {
        type: "input",
        message: "Are there any contributors or do you have any contribution guidelines?",
        name: "contributing"
    },
    {
        type: "input",
        message: "How to run tests on this project?",
        name: "test"
    },
    {
        type: "input",
        message: "Put links to any images/gifs/videos here.",
        name: "visuals"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the URL for the project repository?",
        name: "repo",
    },
    {
        type: "input",
        message: "Please enter deployed project URL",
        name: "deployed",
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(`./${fileName}`, genRmMd);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(response => {
        console.log(response);
        writeToFile("README.md", generateMarkdown(response));

    })
}

// function call to initialize program
init();