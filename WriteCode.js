const perf = require("execution-time")();

const sumZero = (arr) => {
  let correct = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        correct = true;
      }
    }
  }
  if (correct === false) {
    console.log("False");
  } else {
    console.log("True");
  }
};
// sumZero should be 3.03ms
//sumZero([1, 2, 3, -1]);

const UniqueCha = (str) => {
  let correct = true;
  let splitter = str.split("");
  for (let i = 0; i < splitter.length; i++) {
    for (let j = i + 1; j < splitter.length; j++) {
      if (splitter[i] === splitter[j]) {
        console.log(splitter[i]);
        correct = false;
      }
    }
  }
  return correct;
};
//UniqueCha should be 65.8us
//UniqueCha("Monday");

const pangramCheck = (str) => {
  const casesense = str.toLowerCase();
  let splitter = casesense.split("");
  const sets = new Set();

  splitter.forEach((element) => {
    if (/[a-z]/.test(element) && !sets.has(element)) {
      sets.add(element);
    }
  });

  return sets.size === 26;
};
//pangramCheck should be 148us
//pangramCheck("The quick brown fox jumps over the lazy dog!");

const findLongestWord = (arr) => {
  let longest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let string = arr[i];

    if (string.length > longest.length) {
      longest = string;
    }
  }

  return longest.length;
};

//findLongestWord should be 0.045
//findLongestWord(["hi", "hello"]);

perf.start();
let answer = perf.stop();

console.log(findLongestWord(["hi", "hello"]));

console.log(answer);
