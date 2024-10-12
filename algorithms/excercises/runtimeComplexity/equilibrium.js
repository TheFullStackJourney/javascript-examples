/**
 * We are given an input array containing n items, and the aim of this problem is to find the point in
 * this array, called point P,that divides the array into 2.
 * e.g. [3, 1, 2, 4, 3]
 * P is index 2 (value 2)
 * left part is idx 0 and 1, (values 3 and 1)
 * right part is idx 2, 3 and 4, (values 2, 4 and 3)
 * you have to find the point of the array where the elements are in balance, meaning that when you sum
 * the left part and you sum the right side, the difference between them is at a minimum
 * In this example the left part sums: 4, and the right part sums: 9
 * The absolute diff is 5
 * Now you have to find the minimum absolute difference
 * a pen test could be
 *
 * a = [3, 1, 2, 4, 3]
 * n = 5
 *
 * index 0 ==> left side -> 0, right side -> (3 + 1 + 2 + 4 + 3) = 13 => abs diff 13
 * index 1 ==> left side -> (3) = 3, right side -> (1 + 2 + 4 + 3) = 10 => abs diff 7
 * index 2 ==> left side -> (3,1) = 4, right side -> (2 + 4 + 3) = 9 => abs diff 5
 * index 3 ==> left side -> (3,1,2) = 6, right side -> (4 + 3) = 7 => abs diff 1
 * index 4 ==> left side -> (3,1,2,4) = 10, right side -> (3) = 3 => abs diff 7
 */

// NAIVE APPROACH solutionA, one iteration thru a, n, plus another iteration to sum left, and another to sum right.
// O(n * n/2 + n/2) quadratic?

function solutionA(a) {
  let minDiff = undefined;

  a.forEach((value, idx) => {
    if (idx === 0) {
      return;
    }
    const leftArray = a.slice(0, idx);
    const rightArray = a.slice(idx, a.length);
    console.log("### idx: ", idx);
    console.log("### value: ", value);
    console.log("### leftArray: ", leftArray);
    const leftArraySum = sum(leftArray);
    console.log("### leftArray sum: ", leftArraySum);
    console.log("### rightArray: ", rightArray);
    const rightArraySum = sum(rightArray);
    console.log("### rightArray: ", rightArraySum);
    // if (leftArraySum< 0 && 100)
    let diff = leftArraySum - rightArraySum;
    console.log("### diff BEF: ", diff);

    // abs(diff);
    absDiff = diff < 0 ? diff * -1 : diff;
    console.log("### absDiff AFT: ", absDiff);

    if (idx === 1) {
      // first diff, initialization
      minDiff = absDiff;
    } else {
      if (absDiff < minDiff) {
        minDiff = absDiff;
      }
    }
    console.log("### minDiff now: ", minDiff);
  });

  return minDiff;
}

function sum(a) {
  let sum = 0;

  a.forEach((value) => {
    sum = sum += value;
  });
  return sum;
}

// tests
const input1 = [3, 1, 2, 4, 3];
// idx 0 = left 0, right 13 = diff 13
// idx 1 = left 3, right 10 = diff 7
// idx 2 = left 4, right 9 = diff 5
// idx 3 = left 6, right 7 = diff 1
// idx 4 = left 10, right 3 = diff 7

const inputNeg = [-3, -5, 1, 2, 4, 3];
// idx 0 = left 0, right 2 = diff 2
// idx 1 = left -3, right 5 = diff 8
// idx 2 = left -8, right 10 = diff 18
// idx 3 = left -7, right 9 = diff 16
// idx 4 = left -5, right 7 = diff 12
// idx 5 = left -1, right 3 = diff 4

// var result = solutionA(input1);
// console.log(
//   `### solution result input1 is: ${result}, THE TEST HAS: ${
//     result === 1 ? "HAS PASSED" : "HAS FAILED"
//   }`
// );

// var result = solutionA(inputNeg);
// console.log(
//   `### solution result inputNeg is: ${result}, THE TEST HAS: ${
//     result === 4 ? "HAS PASSED" : "HAS FAILED"
//   }`
// );

// Improved APPROACH solutionB, different angle, think of a scale, while you traverse the array you can
// sum the left elements and store them in another leftSum array that point to the same ids that the original array position
// its for future look up, and youc al also sum the total.
// Once finished, you traverse the lookUp array, that ahas the same elements than the original, and calculate thee rightSum based
// on the data you collected, the leftSum and the total Sum, their diff is the rightSum at that point , at that index.
// then you make calc the absolute diff of the left and right sums, and store the lowest.
// some special considerations have to be done with the results, (you discard the last sumLeft)
// O is equal to n + n, O(n) is linear complexity, and memory is O(2) constant, you need just an extra array for look up

function solutionB(a) {
  let minDiff = undefined;

  let sumLeft = 0;
  let sumLeftArray = [];
  let fullSum = 0;
  a.forEach((value, idx) => {
    fullSum = fullSum += value;
    sumLeft = sumLeft += value;
    sumLeftArray[idx] = sumLeft;
  });
  console.log("### sumLeftArray: ", sumLeftArray);
  console.log("### fullSum: ", fullSum);
  sumLeftArray.forEach((sumLeft, idx) => {
    let rightSum = fullSum - sumLeft;
    let diff = sumLeft - rightSum;
    // abs(diff);
    const absDiff = diff < 0 ? diff * -1 : diff;

    console.log(
      "### idx: ",
      idx,
      " leftSum: ",
      sumLeft,
      " rightSum: ",
      rightSum,
      " absDiff: ",
      absDiff
    );

    if (idx === 0) {
      // first diff, initialization
      minDiff = absDiff;
    }
    if (idx === sumLeftArray.length - 1) {
      // last elem of the sumLeftArray, do not take in to account
    } else {
      if (absDiff < minDiff) {
        minDiff = absDiff;
      }
    }
    console.log("### minDiff now: ", minDiff);
  });
  return minDiff;
}

function sum(a) {
  let sum = 0;

  a.forEach((value) => {
    sum = sum += value;
  });
  return sum;
}

// tests
var result = solutionB(input1);
console.log(
  `### solution result input1 is: ${result}, THE TEST HAS: ${
    result === 1 ? "HAS PASSED" : "HAS FAILED"
  }`
);

var result = solutionB(inputNeg);
console.log(
  `### solution result inputNeg is: ${result}, THE TEST HAS: ${
    result === 4 ? "HAS PASSED" : "HAS FAILED"
  }`
);

var result = solutionB([]);
console.log(
  `### solution result inputNeg is: ${result}, THE TEST HAS: ${
    result === undefined ? "HAS PASSED" : "HAS FAILED"
  }`
);

// soluctionC. Another Hint, move elements from the right to the left of the array.
// we iterste thru a 2 times, O(n+n) memory is O(1), then is a linear solution O(n)

function solutionC(a) {
  let leftSum = a[0]; // initialise the leftSum with the first element
  let rightSum = 0;
  a.slice(1).forEach((value) => (rightSum += value)); // remove the first item, we don;t want ot calculate it
  let diff = Math.abs(leftSum - rightSum);

  // now just go thru the items
  // start at pos 1 to avoid the first comparison,  as there is no left portion of the array
  // and stop one before the end, because there will be no right portion of the array
  for (let i = 1; i < a.length - 1; i++) {
    // "move" one element for right to the left
    leftSum += a[i];
    rightSum -= a[i];
    let currentDiff = Math.abs(leftSum - rightSum);
    if (diff > currentDiff) diff = currentDiff;
  }

  return diff;
}

var result = solutionC(input1);
console.log(
  `### solutionC result input1 is: ${result}, THE TEST HAS: ${
    result === 1 ? "HAS PASSED" : "HAS FAILED"
  }`
);

var result = solutionC(inputNeg);
console.log(
  `### solutionC result inputNeg is: ${result}, THE TEST HAS: ${
    result === 4 ? "HAS PASSED" : "HAS FAILED"
  }`
);
