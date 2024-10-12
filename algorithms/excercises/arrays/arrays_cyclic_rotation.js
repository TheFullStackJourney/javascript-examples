/**
 * Cyclic rotation
 * Given an input array, shift every single item from the left to the right.
 * The number of cyclic rotations taht we need to do is determined by the second parameter "k".
 * e.g. if we are given a k of 5 and the array is of 5 elems , we shift them all 5 times , meaning we end up with the
 * values in the same positions as the start
 * [3,5,7,2,8] -> shift 1 -> [8,3,5,7,2]
 */

// naive and non performant solution, O(k*n)

function solution(a, k) {
  let shiftedArray = [];
  console.log(`### a: `, a, " k: ", k);
  for (i = 1; i <= k; i++) {
    // for each cycle
    // const firstElem = shiftedArray[0];
    const lastElem = a[a.length - 1];

    console.log(`### i: `, i);
    console.log(`### lastElem: `, lastElem);

    for (j = 0; j < a.length; j++) {
      console.log(`### j: `, j);
      console.log(`### a[j]: `, a[j]);
      // if (j + 1 > a.length) {
      shiftedArray[j + 1] = a[j];
      // }
    }

    shiftedArray[0] = lastElem;
    shiftedArray = shiftedArray.slice(0, shiftedArray.length - 1);
    console.log(`### shiftedArray after i: `, shiftedArray);
  }
  console.log(`### shiftedArray: `, shiftedArray);

  return shiftedArray;
}

const input1 = [3, 5, 7, 2, 8];
const result = solution(input1, 1);
console.log(
  `### solutionC result input1 is: ${result} THE TEST HAS: ${
    result.toString() == "8,3,5,7,2" ? "HAS PASSED" : "HAS FAILED"
  }`
);

const input2 = [3, 5, 7, 2, 8];
const result2 = solution(input1, 2);
console.log(
  `### solutionC result2 input1 is: ${result} THE TEST HAS: ${
    result2.toString() == "2,8,3,5,7" ? "HAS PASSED" : "HAS FAILED"
  }`
);
