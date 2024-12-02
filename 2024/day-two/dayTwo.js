const data = require('../day-one/input.js');

const input = data.input

const col1 =  input.map((item) => item[0]).sort((a, b) => {return a-b});
const col2 = input.map((item) => item[1]).sort((a, b) => {return a-b});

const frequency = (arr, item) => {
  // console.log(arr.filter(x => x === item).length)
  return arr.filter(x => x === item).length;
};

let difference = col1.map((line, index) => {
  // console.log(line, col2[index]);  
  // console.log(frequency(col2, line));
  return frequency(col2, line) * line;
}).filter(Boolean)


console.log(difference);

const result = difference.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(result);
