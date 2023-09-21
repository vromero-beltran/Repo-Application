// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];
inquirer.propmt(
    [
        {
            type:'input',
            message: "What's the project title",
            name: 'title',
            //validate property to check that the user provides a value
            validate: (value) =>{ if(value){return true} else {return 'Ineed a value to continue'}}
        },
        {
            type: 'input',
            message: "How do you install your app?",
            name: 'installation',
            //validate property to check that the user provides a value
            validate: (value) =>{ if(value){return true} else {return 'Ineed a value to continue'}}
        },
        {
            type: 'input',
            message: "Instructions to be follow?",
            name: 'instructions',
            //validate property to check that the user provides a value
            validate: (value) =>{ if(value){return true} else {return 'Ineed a value to continue'}}
        },
        {
            type: 'input',
            message: "Any credits?",
            name: 'credit',
            //validate property to check that the user provides a value
            validate: (value) =>{ if(value){return true} else {return 'Ineed a value to continue'}}
        },
        {
            type: 'input',
            message: "How do you use your app?",
            name: 'usage',
            //validate property to check that the user provides a value
            validate: (value) =>{ if(value){return true} else {return 'Ineed a value to continue'}}
        },
        {
            //list of license
            type: 'input',
            message: "What license did you use?",
            name: 'license',
            choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
            //validate property to check that the user provides a value
            validate: (value) =>{ if(value){return true} else {return 'Ineed a value to continue'}}
        },
        {
            type: 'input',
            message: "GitHub Username:",
            name: 'git',
            //validate property to check that the user provides a value
            validate: (value) =>{ if(value){return true} else {return 'Ineed a value to continue'}}
        },
        {
            type: 'input',
            message: "E-mail:",
            name: 'email',
            //validate property to check that the user provides a value
            validate: (value) =>{ if(value){return true} else {return 'Ineed a value to continue'}}
        },
    ]
).then{({
    title,
    installation,
    instruction,
    credits,
    license,
    git,
    linkedin,
    usage,
    contribution
})=>{
    // template to be used
    const template = `# ${title}
    * [Installation](#installation)
    * [Usage](#usage)
    * [contribution](#contribution)
    * [Credit](#credit)
    * [License](#license)
    * Installation
    ${installation}
    ##Usage
    ${usage}
    ##Contribution
    ${contribution}
    ### instruction
    ${instruction}
    ## Credit
    ${credits}
    ## License
    ${license}

    #Contact
    *GitHub :${git}
    *Linkedin :${linkedin}
    *E-mail :${email}
    `;
    //function to create our readme using the fs
    createNewfile(title,template);
}
};
//creating our creatNewfile function
function createNewfile(fileName,data){
    //fs
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data,(err) => {
        if(err){
            console.log(err)
        }
        console.log('Your README has been generated');
})
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
