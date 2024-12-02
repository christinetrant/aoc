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
