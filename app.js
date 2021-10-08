// var profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);
const fs = require('fs');
//Hey can I require help from another js name ..
const generatePage= require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2);
// const name = profileDataArgs[0];
// const github= profileDataArgs[1];
console.log(profileDataArgs);

const [name, github] = profileDataArgs

// const printProfileData = (profileDataArr) => {
//     console.log(profileDataArr);
//   };
  
// Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
  
//     console.log('================');
  
//     // Is the same as this... Which then gets refined
//     // profileDataArr.forEach((profileItem) => {
//     //   console.log(profileItem)
//     // }); Wow It's really clean.
//     profileDataArr.forEach(profileItem => console.log(profileItem));
//   };

//   printProfileData(profileDataArgs);

//   const addNums = (numOne, numTwo) => {
//     console.log(numOne, numTwo);
//     return numOne + numTwo;
//   };

// console.log(addNums(2,3))

// const generatePage = (name, github) => {
// return `
// <!DOCTYPE html> 
// <html lang="en"> 
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <title>Portfolio Demo</title>
// </head>

// <body>
//   <h1>${name}</h1>
//   <h2><a href="https://github.com/${github}">Github</a></h2>
// </body>
// </html>
//     `;
// };
// console.log(name,github)
// console.log(generatePage(name, github));

const pageHTML = generatePage(name, github);

fs.writeFile('./index.html', pageHTML, err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
});