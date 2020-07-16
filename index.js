const inquirer = require("inquirer")
// array of questions for user
const questions = [
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
        validate: input => {
            if (input) {
              return true;
            } 
            else {
              console.log("Please enter your username!");
              return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email addresss?",
        validate: input => {
            if (input) {
              return true;
            } 
            else {
              console.log("Please enter your email address!");
              return false;
            }
        }
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's title?",
        validate: input => {
            if (input) {
              return true;
            } 
            else {
              console.log("Please enter your project's title!");
              return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "What license was this project published under?",
        choices: ["GNU AGPL v3","GNU GPL v3","GNU LGPL v3",
        "Mozilla Public License 2.0","Apache License 2.0","MIT","Boost Software License 1.0","No License"]
      },
    {
        type: "input",
        name: "description",
        message: "Please enter a description for your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions for your project.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage information for your project.",
    },
    {
        type: "input",
        name: "contribution",
        message: "Please enter contribution guidelines for your project.",
    },
    {
        type: "input",
        name: "test",
        message: "Please enter test instructions for your project.",
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(result => console.log(result))
}

// function call to initialize program
init();

var dummy = {
    userName: 'brian-presta',
    email: 'brian.presta@gmail.com',
    title: 'portfolio-generator',
    license: 'MIT',
    description: 'This program makes readmes',
    installation: 'Clone it, do npm install',
    usage: 'Go nuts',
    contribution: 'No contributions allowed',
    test: 'Go nuts'
  }