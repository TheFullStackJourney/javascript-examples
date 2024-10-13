/**
 * Cyclic rotation
 * Given an input array, shift every single item from the left to the right.
 * The number of cyclic rotations taht we need to do is determined by the second parameter "k".
 * e.g. if we are given a k of 5 and the array is of 5 elems , we shift them all 5 times , meaning we end up with the
 * values in the same positions as the start
 * [3,5,7,2,8] -> shift 1 -> [8,3,5,7,2]
 */

// naive and non performant solution, O(k*n), it does not work, it only works for k = 1

function solution(a, k) {
  let shiftedArray = [];
  console.log(`### a: `, a, " k: ", k);
  const lastPos = a.length - 1;
  for (i = 1; i <= k; i++) {
    // for each cycle

    const lastElem = a[lastPos];

    console.log(`### i: `, i);
    console.log(`### lastElem: `, lastElem);

    for (j = 0; j < a.length; j++) {
      console.log(`### shifting shiftedArray: `, shiftedArray);

      shiftedArray[j + 1] = a[j];
    }

    shiftedArray[0] = lastElem;
    shiftedArray = shiftedArray.slice(0, shiftedArray.length - 1);
    console.log(`### shiftedArray after i: `, shiftedArray);
    // a = shiftedArray;
  }
  console.log(`### shiftedArray: `, shiftedArray);

  return shiftedArray;
}

// TESTS
const input1 = [3, 5, 7, 2, 8];
const result = solution(input1, 1);
console.log(
  `### solutionC result input1 is: ${result} THE TEST HAS: ${
    result.toString() == "8,3,5,7,2" ? "HAS PASSED" : "HAS FAILED"
  }`
);

// const input2 = [3, 5, 7, 2, 8];
// const result2 = solution(input2, 2);
// console.log(
//   `### solutionC result2 input1 is: ${result2} THE TEST HAS: ${
//     result2.toString() == "2,8,3,5,7" ? "HAS PASSED" : "HAS FAILED"
//   }`
// );

// Solution B - Using The remainder trick, using the modulus operator.
// (i + K) % SIZE, formula to use in every single item of the array to relcoate it to the new array
// Impossible to figure out without this trick

// Calculate the Effective Shifts: If k is larger than the array length,
// we only need to shift k % length times (e.g., shifting an array of 5 elements to the right
// 7 times is the same as shifting it 2 times).

function solutionWithModulus(a, K) {
  let result = new Array(a.length);
  for (i = 0; i < a.length; i++) {
    // we need to move/shift the element k positions forward
    const destinyPosition = (i + K) % a.length;
    result[destinyPosition] = a[i];
  }
  console.log(`### shiftedArray: `, result);

  return result;
}

const result3 = solutionWithModulus(input1, 1);
console.log(
  `### solutionWithModulus result  is: ${result3} THE TEST HAS: ${
    result3.toString() == "8,3,5,7,2" ? "HAS PASSED" : "HAS FAILED"
  }`
);

const result4 = solutionWithModulus(input1, 2);
console.log(
  `### solutionWithModulus result is: ${result4} THE TEST HAS: ${
    result4.toString() == "2,8,3,5,7" ? "HAS PASSED" : "HAS FAILED"
  }`
);
