const input = require('./input.js');

// const stringMatch = input.input.matchAll('mul')
// console.log("🚀 ~ stringMatch:", stringMatch);

const partOne = (input) => {
  const splitArr = input.split('mul');
  // console.log("🚀 ~ splitArr:", splitArr);
  
  
  const filteredArr = splitArr.filter(item => item.charAt(0) === '(');
  
  const decipheredInput = []
  
  filteredArr.forEach(item => {
    let newitem = item.substring(1);
    const splitItem = newitem.split(',')
    // console.log("🚀 ~ splitItem:", splitItem);
    
    if(splitItem.length > 1) {
      const tempArr = [splitItem[0], splitItem[1]]
      // console.log("🚀 ~ tempArr:", tempArr[1]);
      const splitSecondItem = tempArr[1].split(')')[0];
      // console.log("🚀 ~ splitSecondItem:", splitSecondItem.length);
      // if both are numbers then we can push to results Arr
      if(
        tempArr[0].length <= 3 &&
        splitSecondItem.length <= 3 
      ) {
        if(!isNaN(Number(tempArr[0]) && !isNaN(Number(splitSecondItem)))) {
          // console.log("🚀 ~ tempArr:", tempArr);
          decipheredInput.push(Number(tempArr[0]) * Number(splitSecondItem))
  
        }
      }
    }
  })

  const result = decipheredInput.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(result);
  return result
}

const additionalInfo = input.input.split('do()');

const test = additionalInfo.map(item => {
  if(item.includes("don't")) {
    return item.split("don't")[0]
  } else { 
    return item
  }
  });

const partTwo = partOne(test.join())