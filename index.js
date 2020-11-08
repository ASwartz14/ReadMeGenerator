const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');


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
        type: "input",
        message: "What are the uses for this project?",
        name: "usage"
    },
    {
        type: "list",
        message: "Please select the licence you wish to use for this project.",
        name: "license",
        choices: [{
                name: "MIT",
                value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            },
            {
                name: "GNU GPLv3",
                value: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
            },
            {
                name: "Mozilla PL 2.0",
                value: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
            },
            {
                name: "Apache 2.0",
                value: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            },
            {
                name: "Boost Software 1.0",
                value: "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
            },
            "Unlicense/Other",
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
    return fs.writeFileSync(`./${fileName}`, data);
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