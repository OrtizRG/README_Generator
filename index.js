// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMd = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input

const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

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

const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i += 1) {
      console.log(profileDataArr[i]);
    }
  
    console.log('================');
  
    // Is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));
    }
  

// TODO: Create a function to initialize app
function init() {}

printProfileData(profileDataArgs);

// Function call to initialize app
init();
