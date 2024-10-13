/**
 * Leader or more than half appearances
 * Find elements in a list with a particular property, if they are a majority of the list, more than half,
 * then its the leader
 * count(c) > n/2
 * With this definitin we can only have  amax of 1 leader, just beacuse you cant have more tha 1 item
 * having more than 1/2 of the list elements
 * e.g. [3,4,2,3,3,2,3] => n = 7 => count(3) = 4 > 7/2
 */

/**
 * Find the leader, option 1:
 * count times it appears, and return the one that occurs more than helf the size of the array
 * we can use 2 vars:
 *  count
 *  leaderCandidate
 * For every item in the list, we need to iterate the array again and count them O(n^n)
 * quadratic
 *
 * Another method is sorting first
 * in a good sorted array the middle element should be the leader as it takes over the most part of the array
 * unsorted: [2,4,3,3,3,2,3]
 * sorted:   [2,2,3,3,3,3,4]
 * mid position 4, value 3
 * then count it and will be 3 appears 4 times, 4 > 7/2, its the leader O(n log n)
 *
 * You need to find a O(n), just iterate once.
 * The soluton requires finding an element that appears in more than half of the elements of an array. If such element exists,
 * the algorithm should return any index of this element, otherwise return -1
 */

// solution almost naive, O(n+m), linear
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // Implement your solution here
  const results = Array();
  for (i = 0; i < A.length; i++) {
    const first = A[i];
    let second = undefined;
    if (i + 1 <= A.length) {
      // second not over range
      second = A[i + 1];
      // console.log('### first ', first);
      // console.log('### second ', second);
      if (first !== second) {
        // remove them both from the array
        results[i] = undefined;
        results[i + 1] = undefined;
        i = i + 1;
      } else {
        results[i] = first;
        results[i + 1] = second;
      }
    } else {
      // just set first in null
      results[i] = undefined;
    }
    console.log("### results ", results);
  }
  let indexFound = -1;
  for (i = 0; i < results.length; i++) {
    if (results[i] !== undefined) {
      //this is one of the indexes where the leader was originally
      indexFound = i;
      break;
    }
  }
  return indexFound;
}

// TESTS
const input = [3, 4, 2, 3, 3, 2, 3];

const result = solution(input);

console.log(
  `### solution result is: ${result} THE TEST HAS: ${
    result == 6 ? "HAS PASSED" : "HAS FAILED"
  }`
);
