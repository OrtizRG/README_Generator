// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMd = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;



// const questions = () =>  {
//     return inquirer.prompt([
//       {
//         type: 'input',
//         name: 'name',
//         message: 'What is your project title?',
//         validate: nameInput => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log('Please enter your project title');
//             return false;
//           }
//         }
//       },
//       {
//         type: 'input',
//         name: 'github',
//         message: 'Enter your GitHub Username (Required)',
//         validate: githubInput => {
//           if (githubInput) {
//             return true;
//           } else {
//             console.log('Please enter your GitHub username!');
//             return false;
//           }
//         }
//       },
//       {
//         type: 'confirm',
//         name: 'confirmAbout',
//         message: 'Would you like to enter some information about yourself for an "About" section?',
//         default: true
//       },
//       {
//         type: 'input',
//         name: 'about',
//         message: 'Provide some information about yourself:',
//         when: ({ confirmAbout }) => confirmAbout
//       }
//     ]);
//   };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

const generatePage = (userName, githubName) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
  };

console.log(generatePage(name, github));
  

// TODO: Create a function to initialize app
function init() {}



// Function call to initialize app
init();
