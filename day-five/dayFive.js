const fs = require('fs');
fs.readFile('./dayFive.txt', (err, data) => {
  if (err) {
    console.log('error!');
  }
  let input = data.toString().split('\r\n');
  // console.log(input);

  // let input = ['FBFBBFFRLR', 'BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL'];
  input = input.map(seats => {
    return seats.split('');
  });
  let maxSeatId = 0;
  let seatIds = [];

  input = input.map(input => {
    let rowArr = [0, 127];
    let seatArr = [0, 7];
    let rowOutput = 0;
    let seatOutput = 0;
    let rows = input.slice(0, input.length - 3);
    let seats = input.slice(input.length - 3, input.length);

    rows.map(row => {
      let arrMin = rowArr[0];
      let arrMax = rowArr[1];
      if (row === 'F') {
        rowArr = [arrMin, Math.floor((arrMin + arrMax) / 2)];
        return (rowOutput = arrMin);
      }
      if (row === 'B') {
        rowArr = [Math.round((arrMin + arrMax) / 2), arrMax];
        return (rowOutput = arrMax);
      }
      return rowOutput;
    });

    seats.map(seat => {
      let arrMin = seatArr[0];
      let arrMax = seatArr[1];
      if (seat === 'L') {
        seatArr = [arrMin, Math.floor((arrMin + arrMax) / 2)];
        seatOutput = arrMin;
      }
      if (seat === 'R') {
        seatArr = [Math.round((arrMin + arrMax) / 2), arrMax];
        seatOutput = arrMax;
      }
      return seatOutput;
    });

    let seatId = rowOutput * 8 + seatOutput;
    if (seatId > maxSeatId) maxSeatId = seatId;
    // need below array for part 2
    return seatIds.push(seatId);
    // console.log(
    //   'row',
    //   rowOutput,
    //   'seat',
    //   seatOutput,
    //   'ID',
    //   rowOutput * 8 + seatOutput
    // );
  });
  console.log('highest seat ID', maxSeatId);

  // --- Part Two ---
  const findMissing = num => {
    const maxNum = Math.max(...num); // Will find highest number
    const minNum = Math.min(...num); // Will find lowest number
    const missingSeatId = [];

    for (let i = minNum; i <= maxNum; i++) {
      if (!num.includes(i)) {
        // Checking whether i(current value) present in num(argument)
        missingSeatId.push(i); // Adding numbers which are not in num(argument) array
      }
    }
    console.log(missingSeatId);
    return missingSeatId;
  };

  findMissing(seatIds);
});
