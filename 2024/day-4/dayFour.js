const input = require('./input');

const wordSearch = input.input;
// console.log("🚀 ~ wordSearch:", wordSearch);

const testWordSearch = [
  'MMMSXXMASM',
  'MSAMXMSMSA',
  'AMXSXMAAMM',
  'MSAMASMSMX',
  'XMASAMXAMM',
  'XXAMMXXAMA',
  'SMSMSASXSS',
  'SAXAMASAAA',
  'MAMMMXMMMM',
  'MXMXAXMASX'
]
const testTwoWordSearch = [
  '.M.S......',
  '..A..MSMS.',
  '.M.S.MAA..',
  '..A.ASMSM.',
  '.M.S.M....',
  '..........',
  'S.S.S.S.S.',
  '.A.A.A.A..',
  'M.M.M.M.M.',
  '..........'
]

// const findRowMatches = (arr,searchStr) => {
//   return arr.map((row, index) => {
//     return (row.match(new RegExp(searchStr, "g")) || []).length
//   });
// }


// const forwards = findRowMatches(wordSearch, 'XMAS').reduce((a, b) => a + b, 0);
// const backwards = findRowMatches(wordSearch, 'SAMX').reduce((a, b) => a + b, 0);
// console.log("🚀 ~ count:", forwards);
// console.log("🚀 ~ count:", backwards);

// const getAllDiagonal = (arr) => {
//   function row(offset) {
//       var i = arr.length, a = '';
//       while (i--) {
//           a += arr[i][j + (offset ? offset - i : i)] || '';
//       }
//       return a;
//   }

//   let result = [[], []], j;
//   for (j = 1 - arr.length; j < arr[0].length; j++) {
//       result[0].push(row(0));
//       result[1].push(row(arr.length - 1));
//   }
//   return result;
// }
// const getAllDown = (arr) => {
//   const tempArr = []
//    arr.map((row) => {
//     console.log(row.split(''))
//     row.split('').map((letter, index) => {
//       console.log(letter, index)
//         tempArr[index] !== undefined ? tempArr[index] = tempArr[index] + letter : tempArr[index] = letter
//     })
//   })
//   return tempArr
// }
// console.log("🚀 ~ getAllDown ~ getAllDown:", getAllDown(wordSearch));

// const diagForwardsArr = getAllDiagonal(testTwoWordSearch)[0];
// console.log("🚀 ~ diagForwardsArr:", diagForwardsArr);
// const diagBackwardsArr = getAllDiagonal(testTwoWordSearch)[1];
// console.log("🚀 ~ diagBackwardsArr:", diagBackwardsArr);


// const diagDownForwards = findRowMatches(diagForwardsArr, 'XMAS').reduce((a, b) => a + b, 0);
// const diagDownBackwards = findRowMatches(diagForwardsArr, 'SAMX').reduce((a, b) => a + b, 0);
// const diagUpForwards = findRowMatches(diagBackwardsArr, 'XMAS').reduce((a, b) => a + b, 0);
// const diagUpBackwards = findRowMatches(diagBackwardsArr, 'SAMX').reduce((a, b) => a + b, 0);
// // console.log("🚀 ~ diagDownForwards:", diagDownForwards);
// // console.log("🚀 ~ diagDownBackwards:", diagDownBackwards);
// // console.log("🚀 ~ diagUpForwards:", diagUpForwards);
// // console.log("🚀 ~ diagUpBackwards:", diagUpBackwards);

// const getDown = findRowMatches(getAllDown(wordSearch), 'XMAS').reduce((a, b) => a + b, 0);
// const getUp = findRowMatches(getAllDown(wordSearch), 'SAMX').reduce((a, b) => a + b, 0);

// const result = forwards + backwards + diagDownForwards + diagDownBackwards + diagUpForwards + diagUpBackwards + getDown + getUp;
// console.log("🚀 ~ result:", result);


// PART TWO
let count = wordSearch.map((row, index) => {
  const item = row.split('')
  // console.log(item)
  return item.filter((letter, i) => {
    if(letter === 'A') {
      // console.log('prev row:', wordSearch[index-1][i-1], wordSearch[index-1][i+1])
      // console.log('letter:', letter, 'index:', i, 'row:', index)
      // console.log('prev row:', wordSearch[index+1][i-1], wordSearch[index+1][i+1])

      // console.log()

      const topLeft = wordSearch[index-1] ? wordSearch[index-1][i-1] ?? '' : '';
      const topRight = wordSearch[index-1] ? wordSearch[index-1][i+1] ?? '' : ''
      const bottomLeft = wordSearch[index+1] ? wordSearch[index+1][i-1] ?? '' : ''
      const bottomRight = wordSearch[index+1] ? wordSearch[index+1][i+1] ?? '' : ''

      if((topLeft + letter + bottomRight === 'MAS' || topLeft + letter + bottomRight === 'SAM') && (topRight + letter + bottomLeft === 'MAS' || topRight + letter + bottomLeft === 'SAM')) {
        return item
      }
    }
    
    // console.log(letter[index + 1], letter[index + 1])
  }).length
  
  // console.log(findRowMatches(item, 'M.S'))
})
console.log("🚀 ~ count:", count);

const result = count.reduce((a, b) => a + b, 0);
console.log("🚀 ~ result:", result);
