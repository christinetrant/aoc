const data = require('./input.js');

const input = data.input

const col1 =  input.map((item) => item[0]).sort((a, b) => {return a-b});
const col2 = input.map((item) => item[1]).sort((a, b) => {return a-b});

let difference = col1.map((line, index) => {
  console.log(line, col2[index]);
  console.log(line - col2[index]);
  if(line > col2[index]) {
    return line - col2[index];
  } else if(line < col2[index]) {
    return col2[index] - line;
  } else {
    return 0;
  }
  
})

console.log(difference);

const result = difference.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(result);
