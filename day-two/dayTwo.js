// --- Day 2: Password Philosophy ---
// Your flight departs in a few days from the coastal airport; the easiest way down to the coast from here is via toboggan.

// The shopkeeper at the North Pole Toboggan Rental Shop is having a bad day. "Something's wrong with our computers; we can't log in!" You ask if you can take a look.

// Their password database seems to be a little corrupted: some of the passwords wouldn't have been allowed by the Official Toboggan Corporate Policy that was in effect when they were chosen.

// To try to debug the problem, they have created a list (your puzzle input) of passwords (according to the corrupted database) and the corporate policy when that password was set.

// For example, suppose you have the following list:

// 1-3 a: abcde
// 1-3 b: cdefg
// 2-9 c: ccccccccc
// Each line gives the password policy and then the password. The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.

// In the above example, 2 passwords are valid. The middle password, cdefg, is not; it contains no instances of b, but needs at least 1. The first and third passwords are valid: they contain one a or nine c, both within the limits of their respective policies.

// How many passwords are valid according to their policies?

const fs = require('fs');
fs.readFile('./dayTwoInput.txt', (err, data) => {
  if (err) {
    console.log('error!');
  }
  // remove new line and carriage return
  let input = data.toString().split(/\r\n|\n|\r/);
  // split array element into three elements at space character
  input = input.map(inpt => {
    return inpt.split(' ');
  });
  // go through each index and split first into a new array with min and max number, and second removing ':' so we are left with letter
  input = input.map(item => {
    item[0] = item[0].split('-');
    item[1] = item[1].replace(':', '');
    return item;
  });
  // Part 1: find min and max for password
  let validOne = 0;
  input.map(pass => {
    let minNum = pass[0][0];
    let maxNum = pass[0][1];
    let letterToMatch = pass[1];
    let password = pass[2];
    if (password.includes(letterToMatch)) {
      let count = [...password].filter(letter => {
        return letter === letterToMatch;
      });
      if (count.length >= minNum && count.length <= maxNum) {
        validOne += 1;
      }
    }
  });
  console.log('validOne passwords:', validOne);

  // Part 2: find characters occurring for password
  let validTwo = 0;
  input.map(pass => {
    let charOne = parseInt(pass[0][0]);
    let charTwo = parseInt(pass[0][1]);
    let letterToMatch = pass[1];
    let password = pass[2];
    if (password.includes(letterToMatch)) {
      let filteredLetters = [];
      [...password].map((letter, i) => {
        if (i + 1 === charOne) {
          filteredLetters.push(letter);
        } else if (i + 1 === charTwo) {
          filteredLetters.push(letter);
        }
      });
      if (filteredLetters.includes(letterToMatch)) {
        if (filteredLetters[0] !== filteredLetters[1]) {
          validTwo += 1;
        }
      }
    }
  });
  console.log('validTwo passwords:', validTwo);
});
