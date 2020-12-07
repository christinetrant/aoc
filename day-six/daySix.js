const fs = require('fs');
fs.readFile('./daySix.txt', (err, data) => {
  if (err) {
    console.log('error!');
  }
  let input = data.toString();

  let groupAnswers = [];
  // split each item into array by new line divider
  // empty line = new person
  let splitInput = input.split(/\n\s*\n/);
  splitInput.forEach(group => {
    // remove extra line breaks & unnecessary spaces
    group = group.replace(/(\r\n|\n|\r)/gm, ' ').trim();

    groupAnswers.push(group);
  });

  // split groups into one array and flatten so easier to manipulate
  let partOneGroupAnswers = groupAnswers.map(answer =>
    answer
      .split(' ')
      .map(person => person.split(''))
      .flat()
  );

  // remove duplicates from each group so we can count each answer once
  partOneGroupAnswers = partOneGroupAnswers.map(answers => {
    return answers.filter((person, i, arr) => {
      return arr.indexOf(person) === i;
    });
  });
  // Now we can count each groups answered questions:
  let count = 0;
  partOneGroupAnswers.map(group => {
    return (count += group.length);
  });
  console.log('answers', count);

  // --- Part Two ---
  // split groups for each person
  let partTwoGroupAnswers = groupAnswers.map(answer =>
    answer.split(' ').map(person => person.split(''))
  );
  partTwoGroupAnswers = partTwoGroupAnswers.map(group =>
    group.reduce((acc, current) =>
      acc.filter(answer => current.includes(answer))
    )
  );
  // Part Two!
  let count2 = 0;
  partTwoGroupAnswers.map(group => {
    return (count2 += group.length);
  });
  console.log('part two answers', count2);

  // console.log(partTwoGroupAnswers);
});
