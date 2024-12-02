// let testArray = [
//   '1234567890',
//   '123F567890',
//   '123456X890',
//   '123456789X',
//   '12X4567890',
//   '12345f7890',
//   '12345678f0',
//   '1X34567890'
// ];

const fs = require('fs');
fs.readFile('./dayThreeInput.txt', (err, data) => {
  if (err) {
    console.log('error!');
  }
  // remove new line and carriage return
  let input = data.toString().split(/\r\n|\n|\r/);

  // start on first row at index zero - go right 3 times (is it a tree or space)
  // let d = 1;
  // let r = 3;

  const getSlope = (path, r, d) => {
    let goRight = 0;
    let treeCount = 0;
    // filter out down elements so we can now go right in these ones
    let filteredDown = path.filter((element, index) => {
      if (index >= d && index % d === 0) return index;
      // console.log(index);
    });

    filteredDown.forEach((element, i) => {
      goRight += r;
      // if string ends, go back to beginning
      if (goRight > element.length - 1) {
        goRight -= element.length;
      }

      if (element.charAt(goRight) === '#') treeCount++;
      // return console.log('character:', element.charAt(goRight));
    });
    // console.log('tree', treeCount);
    return treeCount;
  };
  console.log('slope 1:', getSlope(input, 3, 1));
  console.log(
    'all slopes:',
    getSlope(input, 1, 1),
    getSlope(input, 3, 1),
    getSlope(input, 5, 1),
    getSlope(input, 7, 1),
    getSlope(input, 1, 2)
  );
  console.log(
    'all slopes multiplied:',
    getSlope(input, 1, 1) *
      getSlope(input, 3, 1) *
      getSlope(input, 5, 1) *
      getSlope(input, 7, 1) *
      getSlope(input, 1, 2)
  );
});
// 280
