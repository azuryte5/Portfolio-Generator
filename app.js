const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?'
//     }
//   ])
//   .then(answers => console.log(answers));
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: (nameInput) => {
            if(nameInput) {
                return true;
            } else {
            console.log("Please enter your name!");
            return false;
            }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:',
        when: ({ confirmAbout }) => confirmAbout
      }
    ]);
  };

const promptProject = portfolioData => {
    console.log (`

=================
Add a New Project
=================
`);
// If there's no 'projects' array property, create one
if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('You need to enter a project name!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
              if (descriptionInput) {
                return true;
              } else {
                console.log('You need to enter a project description!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        },
        {
          type: 'checkbox',
          name: 'languages',
          message: 'What did you build this project with? (Check all that apply)',
          choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
          type: 'input',
          name: 'link',
          message: 'Enter the GitHub link to your project. (Required)',
          validate: linkInput => {
            if (linkInput) {
              return true;
            } else {
              console.log('You need to enter a project GitHub link!');
              return false;
            }
          }
        },
        {
          type: 'confirm',
          name: 'feature',
          message: 'Would you like to feature this project?',
          default: false
        },
        {
          type: 'confirm',
          name: 'confirmAddProject',
          message: 'Would you like to enter another project?',
          default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
        } else {
          return portfolioData;
        }
      });
};

promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    // will be uncommented in lesson 4
    // const pageHTML = generatePage(portfolioData);
    // fs.writeFile('./index.html', pageHTML, err => {
    //   if (err) throw new Error(err);
    //   console.log('Page created! Check out index.html in this directory to see it!');
    // });
    });

// console.log(inquirer)
// // var profileDataArgs = process.argv.slice(2, process.argv.length);
// // console.log(profileDataArgs);
 
// //Hey can I require help from another js name ..
// const generatePage= require('./src/page-template.js');

// // const profileDataArgs = process.argv.slice(2);
// // const name = profileDataArgs[0];
// // const github= profileDataArgs[1];
// // console.log(profileDataArgs);

// // const [name, github] = profileDataArgs

// // const printProfileData = (profileDataArr) => {
// //     console.log(profileDataArr);
// //   };
  
// // Notice the lack of parentheses around the `profileDataArr` parameter?
// // const printProfileData = profileDataArr => {
// //     // This...
// //     for (let i = 0; i < profileDataArr.length; i += 1) {
// //       console.log(profileDataArr[i]);
// //     }
  
// //     console.log('================');
  
// //     // Is the same as this... Which then gets refined
// //     // profileDataArr.forEach((profileItem) => {
// //     //   console.log(profileItem)
// //     // }); Wow It's really clean.
// //     profileDataArr.forEach(profileItem => console.log(profileItem));
// //   };

// //   printProfileData(profileDataArgs);

// //   const addNums = (numOne, numTwo) => {
// //     console.log(numOne, numTwo);
// //     return numOne + numTwo;
// //   };

// // console.log(addNums(2,3))

// // const generatePage = (name, github) => {
// // return `
// // <!DOCTYPE html> 
// // <html lang="en"> 
// // <head>
// //   <meta charset="UTF-8">
// //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //   <meta http-equiv="X-UA-Compatible" content="ie=edge">
// //   <title>Portfolio Demo</title>
// // </head>

// // <body>
// //   <h1>${name}</h1>
// //   <h2><a href="https://github.com/${github}">Github</a></h2>
// // </body>
// // </html>
// //     `;
// // };
// // console.log(name,github)
// // console.log(generatePage(name, github));

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;
  
//     console.log('Portfolio complete! Check out index.html to see the output!');
// });