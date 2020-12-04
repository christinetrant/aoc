// --- Part One ---
// Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.
// Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.
// For example, suppose your expense report contained the following:
// 1721
// 979
// 366
// 299
// 675
// 1456
// In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.
// Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?

// --- Part Two ---
// The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation. They offer you a second one if you can find three numbers in your expense report that meet the same criteria.
// Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.
// In your expense report, what is the product of the three entries that sum to 2020?

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
