const fs = require('fs');
fs.readFile('./dayFour.txt', (err, data) => {
  if (err) {
    console.log('error!');
  }
  // remove new line and carriage return
  input = data.toString();
  let passportArray = [];
  // split each item into array by new line divider
  // empty line = new person
  let splitInput = input.split(/\n\s*\n/);
  splitInput.forEach((id, i) => {
    // remove extra line breaks & unnecessary spaces
    id = id.replace(/(\r\n|\n|\r)/gm, ' ').trim();
    passportArray.push(id);
  });

  // Split index into each item
  passportArray = passportArray.map(item => {
    // Then split into key, value individual arrays

    return (item = item.split(' ').map((info, i) => {
      return info.split(':');
    }));
  });
  // console.log(passportArray);
  // Now to make object from array
  let passports = [];
  passportArray.map(item => {
    let tempObj = {};
    tempObj = Object.fromEntries(item);
    passports.push(tempObj);
  });

  // console.log(passportArray);
  // console.log(passports);

  // Count valid passports
  let valid = 0;

  // Now to check required fields
  //cid is optional so leaving out:
  const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'].sort();

  const checkByr = passport => {
    // byr (Birth Year) - four digits; at least 1920 and at most 2002.
    if (passport.byr >= 1920 && passport.byr <= 2002) {
      return true;
    }
  };

  const checkIyr = passport => {
    // iyr (Issue Year) - four digits; at least 2010 and at most 2020.
    if (passport.iyr >= 2010 && passport.iyr <= 2020) {
      return true;
    }
  };

  const checkEyr = passport => {
    // eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
    if (
      passport.eyr.length === 4 &&
      passport.eyr >= 2020 &&
      passport.eyr <= 2030
    ) {
      return true;
    }
  };

  const checkHgt = passport => {
    // hgt (Height) - a number followed by either cm or in:
    // If cm, the number must be at least 150 and at most 193.
    // If in, the number must be at least 59 and at most 76.
    let num = passport.hgt.slice(0, passport.hgt.length - 2);
    let msrmt = passport.hgt.slice(
      passport.hgt.length - 2,
      passport.hgt.length
    );
    if (
      (msrmt === 'cm' && num >= 150 && num <= 193) ||
      (msrmt === 'in' && num >= 59 && num <= 76)
    ) {
      return true;
    }
  };

  const checkHcl = passport => {
    // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
    if (passport.hcl.charAt(0) === '#') {
      let letterNumber = /^[0-9a-fA-F]+$/;
      let color = passport.hcl.replace('#', '');
      if (color.match(letterNumber) && passport.hcl.length === 7) {
        return true;
      }
    }
  };

  const checkEcl = passport => {
    // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
    let eyeColor = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
    if (eyeColor.includes(passport.ecl)) {
      return true;
    }
  };

  const checkPid = passport => {
    // pid (Passport ID) - a nine-digit number, including leading zeroes.
    let passID = /^[0-9]+$/;
    if (passport.pid.match(passID) && passport.pid.length === 9) {
      return true;
    }
  };

  const checkValid = passport => {
    if (
      checkByr(passport) &&
      checkIyr(passport) &&
      checkEyr(passport) &&
      checkHgt(passport) &&
      checkHcl(passport) &&
      checkEcl(passport) &&
      checkPid(passport)
    ) {
      valid++;
    }
  };

  passports.filter(passport => {
    let passportKey = Object.keys(passport);
    passportKey.sort();
    // remove cid as not required:
    passportKey = passportKey.filter(optional => optional !== 'cid');
    if (passportKey.length !== required.length) {
    } else {
      checkValid(passport);
    }
    return valid;
  });
  console.log('Valid passports', valid);
});
