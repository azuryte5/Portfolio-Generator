// var profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// const printProfileData = (profileDataArr) => {
//     console.log(profileDataArr);
//   };
  
// Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i += 1) {
      console.log(profileDataArr[i]);
    }
  
    console.log('================');
  
    // Is the same as this... Which then gets refined
    // profileDataArr.forEach((profileItem) => {
    //   console.log(profileItem)
    // }); Wow It's really clean.
    profileDataArr.forEach(profileItem => console.log(profileItem));
  };

  printProfileData(profileDataArgs);

  const addNums = (numOne, numTwo) => {
    console.log(numOne, numTwo);
    return numOne + numTwo;
  };

console.log(addNums(2,3))