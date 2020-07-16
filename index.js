const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown.js")
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
        "Mozilla Public License 2.0","Apache License 2.0","MIT","Boost Software License 1.0","Unlicense"]
      },
    {
        type: "input",
        name: "description",
        message: "Please enter a description for your project.",
        validate: input => {
          if (input) {
            return true;
          } 
          else {
            console.log("Please enter a description!");
            return false;
          }
      }
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions for your project.",
        validate: input => {
          if (input) {
            return true;
          } 
          else {
            console.log("Please enter installation instructions!");
            return false;
          }
      }
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage information for your project.",
        validate: input => {
          if (input) {
            return true;
          } 
          else {
            console.log("Please enter usage information!");
            return false;
          }
      }
    },
    {
        type: "input",
        name: "contribution",
        message: "Please enter contribution guidelines for your project.",
        validate: input => {
          if (input) {
            return true;
          } 
          else {
            console.log("Please enter contribution guidelines!");
            return false;
          }
      }
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter test instructions for your project.",
        validate: input => {
          if (input) {
            return true;
          } 
          else {
            console.log("Please enter test instructions!");
            return false;
          }
      }
    },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`./dist/${fileName}`,data, err => {
    if (err) {
      console.log(err)
      return
    }
  } )
}

// function to initialize program
function init() {
    // inquirer.prompt(questions).then(result => console.log(result))
    writeToFile('README.md',generateMarkdown(dummy))
}
var dummy = {
  userName: 'brian-presta',
  email: 'brian.presta@gmail.com',
  title: 'portfolio-generator',
  license: 'MIT',
  description: 'This program makes readmes',
  installation: 'Clone it, do npm install',
  usage: 'Go nuts',
  contribution: 'No contributions allowed',
  tests: 'Go nuts'
}
// function call to initialize program
init();

