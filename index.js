// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input

const questions =["What is the name of your project?"];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is thename of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the project description?'
      },

      {
        type: 'input',
        name: 'Installation',
        message: 'What applications need to be installed?'
      },

      {
        type: 'input',
        name: 'Usage',
        message: 'Application (usage) of the project?'
      },

    {
      type: 'list',
      message: 'What license?',
      name: 'License',
      choices: ['MIT', 'Apache', 'MPL', 'GPL']
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'SQL']
    }
  ])

// TODO: Create a function to write README file

let data = "Learning how to write in a file."

function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, err => {
        if (err) throw err;
     
})
};

// const generatePage = (userName, githubName) => {
//     return `

//     ##Description 
//     ${userName}
//     ${githubName}

//     ## Table of Contents

//     * [Installation](#installation)
//     * [Usage](#usage)
//     * [Credits](#credits)
//     * [License](#license)
    
//     ## Installation

//     What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
    
    
//     ## Usage 
    
//     Provide instructions and examples for use. Include screenshots as needed. 
    
//     ## License
    
//     The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)
    
//     ## Tests

//     ## Questions
//     `;
//   };

// fs.writeFile('README.md', generatePage(name, github), err => {
//     if (err) throw err;

//     console.log('Porfolio complete!')
    
// });
  

// TODO: Create a function to initialize app





// Function call to initialize app
    
init (writeToFile);