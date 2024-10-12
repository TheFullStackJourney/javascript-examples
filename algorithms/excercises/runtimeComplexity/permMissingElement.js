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

//////////////////// Solution A, sort it and go trhu the array finding gaps, single pass tru the array O(n)  O(n), linear runtime complexity ////////////////////

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
var inputEmpty = [];

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

// var result = solution(inputEmpty);
// console.log(
//   `### result end is: ${result}, THE TEST HAS: ${
//     result === 1 ? "HAS PASSED" : "HAS FAILED"
//   }`
// );

////////////////////  Solution B, find the missing number by index, nested loop O(n^2) quadratic complexity ////////////////////

function solutionB(a) {
  console.log("### solutionB a: ", a);
  var n = a.length;

  //ES6
  // for (const index in numbers) {
  //     console.log(`Index ${index}: ${numbers[index]}`);
  // }

  var missingVal = -1;

  // iterate the array of numbers
  for (i = 1; i <= n + 1; i++) {
    // and for each index, which represents a value in the array (coincidentally),
    // we try to find it in the array, with another loop ...
    var val = i;
    console.log("VAL: ", i);
    found = findValue(a, val);
    console.log("found OUT: ", found);

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
  console.log("is value: ", val, " in the array?", a);
  console.log("n: ", n);

  for (j = 0; j < n; j++) {
    // console.log("a[i] ", a[i]);

    if (a[j] === val) {
      console.log("value: ", a[j], "found in position: ", j);
      found = true;
    }
  }
  console.log("value: ", val, "found: ", found);

  return found;
}

// tests
// var result = solutionB(inputMissingInTheMid);
// console.log(
//   `### solutionB result mid is: ${result}, THE TEST HAS: ${
//     result === 6 ? "HAS PASSED" : "HAS FAILED"
//   }`
// );

// var result = solutionB(inputMissingInTheStart);
// console.log(
//   `### solutionB result first is: ${result}, THE TEST HAS: ${
//     result === 1 ? "HAS PASSED" : "HAS FAILED"
//   }`
// );
// var result = solutionB(inputMissingAtTheEnd);
// console.log(
//   `### solutionB result end is: ${result}, THE TEST HAS: ${
//     result === 8 ? "HAS PASSED" : "HAS FAILED"
//   }`
// );
// var result = solutionB(inputEmpty);
// console.log(
//   `### result end is: ${result}, THE TEST HAS: ${
//     result === 1 ? "HAS PASSED" : "HAS FAILED"
//   }`
// );

////////////////////  Solution C O(n)  O(n), linear runtime complexity, mem O(n) linear memory usage, use another data structure, one that lets you store which numbers we have
// processed and which we haven't ////////////////////
// we can use a hashtable, or just an array of size n + 2

//e.g.
// array: n = 4 --> [2,3,1,5] value range [1,5]
// support look up table array: n + 2 = 6 --> [null, null, null, null, null, null]

// go trhu the main array, get the value, and mark it in the look up array
// when we finish we loop thru the look up table an find the missing

// e.g. array: [2,3,1,5] lookup: [undefined, true, true, true, undefined, true]
// table lookup position 0 is unused

// O(n+n+2) => drop the constants and talke the highest order, then in this course the complexity is linear O(n)
// extra memory O(n)

// TO BE CODED

////////////////////  Solution D --  O(n) mem O(1) constant memory, linear runtime complexity, sum all the values taht are expected and n+1 sumatory, and check the diff with the actual values
// e.g. [2,3,1,5] ==> n = 4 ==> n+1 = 5 => summatory of n+1 = 1+2+3+4+5 = 15
// summatory of hte real values less the missing value 2+3+1+5 = 11, diff = 4, then missing value is 4

function solutionD(a) {
  console.log("### solutionD a: ", a);
  var n = a.length;

  var sum = 0;
  var sumFull = 0;

  // iterate and sum the array of numbers
  for (i = 0; i < n; i++) {
    sum = sum + a[i];
    sumFull = sumFull + i + 1;
  }
  // last item has to be added up as the count inside the loop started in 0.
  sumFull = sumFull + n + 1;
  console.log("sum: ", sum);
  console.log("sumFull: ", sumFull);

  return sumFull - sum;
}

// tests
// var result = solutionD(inputMissingInTheMid);
// console.log(
//   `### solutionD result mid is: ${result}, THE TEST HAS: ${
//     result === 6 ? "HAS PASSED" : "HAS FAILED"
//   }`
// );

// var result = solutionD(inputMissingInTheStart);
// console.log(
//   `### solutionD result first is: ${result}, THE TEST HAS: ${
//     result === 1 ? "HAS PASSED" : "HAS FAILED"
//   }`
// );
// var result = solutionD(inputMissingAtTheEnd);
// console.log(
//   `### solutionD result end is: ${result}, THE TEST HAS: ${
//     result === 8 ? "HAS PASSED" : "HAS FAILED"
//   }`
// );

// var result = solutionD(inputEmpty);
// console.log(
//   `### solutionD result end is: ${result}, THE TEST HAS: ${
//     result === 1 ? "HAS PASSED" : "HAS FAILED"
//   }`
// );

// ES6, and using the "sum to X" function
// sum(1...X) =  X * (X + 1) / 2

function solutionD_ES6(a) {
  let sum = 0;
  let sumFull = 0;
  a.forEach((value, idx) => (sum = sum += value));

  const maxValue = a.length + 1;
  // x sum fomulae X * (X + 1) / 2
  sumFull = (maxValue * (maxValue + 1)) / 2;
  return sumFull - sum;
}
// tests
var result = solutionD_ES6(inputMissingInTheMid);
console.log(
  `### solutionD_ES6 result mid is: ${result}, THE TEST HAS: ${
    result === 6 ? "HAS PASSED" : "HAS FAILED"
  }`
);

var result = solutionD_ES6(inputMissingInTheStart);
console.log(
  `### solutionD_ES6 result first is: ${result}, THE TEST HAS: ${
    result === 1 ? "HAS PASSED" : "HAS FAILED"
  }`
);
var result = solutionD_ES6(inputMissingAtTheEnd);
console.log(
  `### solutionD_ES6 result end is: ${result}, THE TEST HAS: ${
    result === 8 ? "HAS PASSED" : "HAS FAILED"
  }`
);

var result = solutionD_ES6(inputEmpty);
console.log(
  `### solutionD_ES6 inputEmpty result end is: ${result}, THE TEST HAS: ${
    result === 1 ? "HAS PASSED" : "HAS FAILED"
  }`
);
