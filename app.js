// var profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// const printProfileData = (profileDataArr) => {
//     console.log(profileDataArr);
//   };
  
// Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++) {
      console.log(profileDataArr[i]);
    }
  };

  printProfileData(profileDataArgs);

  const addNums = (numOne, numTwo) => {
    console.log(numOne, numTwo);
    return numOne + numTwo;
  };

console.log(addNums(2,3))