// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions =[
    {
        type:'input',
        message: "What's the project title?",
        name: 'title',
        //validate property to check that the user provides a value
        validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}}
    },
    {
        type: 'input',
        message: "What is required to install in order to run this application?",
        name: 'installations',
        //validate property to check that the user provides a value
        validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}}
    },
    {
        type: 'input',
        message: "What is needed in order to run the test?",
        name: 'test',
        //validate property to check that the user provides a value
        validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}}
    },
    {
        type: 'input',
        message: "How should people contribute to the project?",
        name: 'contribution',
        //validate property to check that the user provides a value
        validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}}
    },
    {
        type: 'input',
        message: "How do you use your app?",
        name: 'usages',
        //validate property to check that the user provides a value
        validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}}
    },
    {
        //list of license
        type: 'list',
        message: "What license did you use?",
        name: 'license',
        choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
        //validate property to check that the user provides a value
        validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}}
    },
    {
        type: 'input',
        message: "GitHub Username:",
        name: 'git',
        //validate property to check that the user provides a value
        validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}}
    },
    {
        type: 'input',
        message: "Describe what the app will do?",
        name: 'description',
        //validate property to check that the user provides a value
        validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}}
    },
    {
        type: 'input',
        message: "E-mail:",
        name: 'email',
        //validate property to check that the user provides a value
        validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}}
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        //fs
        fs.writeFile(fileName, data, function(err) {
            console.log(fileName)
            console.log(data)
            if(err){
                return console.log(err)
            }
            console.log('Your README has been generated');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();

module.exports = questions;
