/**
 * We are given a list of numbers, and in this list, we have a missing element.
 * The numbers are not in order.
 * We are given an array of n positions
 * The range of numbers are from 1 to n+1. e.g. 4 positions, the range of numbers
 * could be 1 to 5, and one will be missing.
 * e.g. 4 positions, array [2,5,3,4], number 1 missing
 * You need to find the missing number
 *
 */

// input: an array of size n . e.g.
var input = [2, 4, 7, 8, 1, 5, 3];

// Solution A, sort it and go trhu the array finding gaps

function solution(a) {
  console.log("### solution a: ", a);

  var n = a.length;

  // sort it
  a = a.sort((a, b) => (a > b ? 1 : -1));

  console.log("### solution a sorted: ", a);

  // is the first missing? @TODO
  if (a[0] !== 1) {
    // e.g. [2, 3, 4, 5, 6, 7, 8]
    return 1;
  }

  // is the last missing? @TODO
  if (a[n - 1] !== n + 1) {
    console.log("### last missing ");
    // e.g. [1, 2, 3, 4, 5, 6, 7] n=7 missing 8, last
    return n + 1; // the last
  }

  // not the first nor last missing.
  // go thru the array comparing 2 consecutive positions and find a gap
  var found = -1;

  for (i = 0; i < n; i++) {
    var valueInPosition = a[i];
    var nextPosition = i + 1;
    console.log("### valueInPosition pos: ", i, valueInPosition);
    console.log("### nextPosition: ", nextPosition);

    if (nextPosition > n - 1) {
      // no next avail, avoid null pointer
      console.log("### nextPosition is out of bounds");
      break;
    }

    // next is avail
    var valueInNextPosition = a[nextPosition];

    if (!(valueInPosition === valueInNextPosition - 1)) {
      // there is a gap
      found = valueInPosition + 1;
      break;
    }
    // }
  }
  return found;
}

// test
var inputMissingInTheMid = [2, 4, 7, 8, 1, 5, 3];
var inputMissingInTheStart = [2, 4, 7, 8, 6, 5, 3];
var inputMissingAtTheEnd = [2, 4, 7, 6, 1, 5, 3];

// var result = solution(inputMissingInTheMid);
// console.log(
//   `### result mid is: ${result}, THE TEST HAS: ${
//     result === 6 ? "HAS PASSED" : "HAS FAILED"
//   }`
// );

// var result = solution(inputMissingInTheStart);
// console.log(
//   `### result first is: ${result}, THE TEST HAS: ${
//     result === 1 ? "HAS PASSED" : "HAS FAILED"
//   }`
// );

// var result = solution(inputMissingAtTheEnd);
// console.log(
//   `### result end is: ${result}, THE TEST HAS: ${
//     result === 8 ? "HAS PASSED" : "HAS FAILED"
//   }`
// );

// Solution B, find the missing number by index, nested loop

function solutionB(a) {
  console.log("### solutionB a: ", a);
  var n = a.length;

  //ES6
  // for (const index in numbers) {
  //     console.log(`Index ${index}: ${numbers[index]}`);
  // }

  var missingVal = -1;

  // iterate the array of numbers
  for (i = 1; i < n + 1; i++) {
    // and for each index, which represents a value in the array (coincidentally),
    // we try to find it in the array, with another loop ...
    var val = i;
    console.log("I: ", i);
    found = findValue(a, val);
    if (!found) {
      missingVal = val;
      break;
    }
  }
  console.log("missingVal: ", missingVal);

  return missingVal;
}

function findValue(a, val) {
  var n = a.length;
  var found = false;
  console.log("is value: ", val, " in the array?");

  for (i = 0; i < n; i++) {
    if (a[i] === val) {
      console.log("value: ", a[i], "found in position: ", i);
      found = true;
      break;
    }
  }
  console.log("value: ", val, "found: ", found);

  return found;
}

var result = solutionB(inputMissingInTheMid);
console.log(
  `### solutionB result mid is: ${result}, THE TEST HAS: ${
    result === 6 ? "HAS PASSED" : "HAS FAILED"
  }`
);

var result = solutionB(inputMissingInTheStart);
console.log(
  `### solutionB result first is: ${result}, THE TEST HAS: ${
    result === 1 ? "HAS PASSED" : "HAS FAILED"
  }`
);

var result = solutionB(inputMissingAtTheEnd);
console.log(
  `### solutionB result end is: ${result}, THE TEST HAS: ${
    result === 8 ? "HAS PASSED" : "HAS FAILED"
  }`
);
