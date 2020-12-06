// let input = [979, 1721, 366, 299, 675, 1456];
const fs = require('fs');
fs.readFile('./dayOneInput.txt', (err, data) => {
  if (err) {
    console.log('error!');
  }
  let input = data.toString().split('\r');
  input = input.map(inp => {
    return parseInt(inp.trim());
  });

  let outputArrayTwo = [];
  let differenceArray = input.map(num => {
    return 2020 - num;
  });

  // Part 1: Find 2 numbers
  input.filter(item => {
    if (differenceArray.includes(item)) outputArrayTwo.push(item);
  });
  const twoNumbers = outputArrayTwo.reduce((acc, cur) => cur * acc);
  console.log('Two numbers multiplied = ', twoNumbers);

  // Part 3: Find 3 numbers
  let outputArrayThree = [];
  input.map(num => {
    return input.map(numTwo => {
      if (differenceArray.includes(num + numTwo)) {
        if (!outputArrayThree.includes(num)) {
          return outputArrayThree.push(num);
        }
      }
    });
  });

  const threeNumbers = outputArrayThree.reduce((acc, cur) => cur * acc);
  console.log('Three numbers multiplied = ', threeNumbers);
});
// Part 1 Answer:
// 138 * 1882 = 259716
// Part 2 Answer:
// 272 *308 * 1440 = 120637440
