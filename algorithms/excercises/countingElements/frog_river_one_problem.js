/**
 * Frog needs to cross a river
 * X being the length of the array, spaces to cover with leaves to be able to cross over.
 * Another array with the when and were the leaves fall in each position, this array's index is the time and the value
 * are the positions of where the leaves fall.
 * e.g.
 * X = 5
 * A = [1,3,1,4,2,3,5,4]
 * so,
 * at time 0 a leave falls in the bridge in position 1
 * at time 1 a leave falls in the bridge in position 3
 * at time 2 another leave falls in the bridge in position 1
 * and so on ...
 * When every single position in the bridge is coverd the frog
 * can cross, we need to return the time (A's index) when the frog was able to cross.
 * If the river is not covered when the leaves end, then return -1
 */

// naive approach, O(n*n), quadratic, non performant

function solution(a, x) {
  let bridge = Array(x);
  let result = -1;
  for (i = 0; i < a.length; i++) {
    let leavePosition = a[i];
    console.log("### leavePosition: ", leavePosition, " idx/time: ", i);
    bridge[leavePosition - 1] = bridge[leavePosition - 1]
      ? bridge[leavePosition - 1] + 1
      : 1;
    console.log("### bridge: ", bridge);
    // is bridge covered
    console.log("### bridge length: ", bridge.length);
    // bridge
    let bridgeCovered = true;
    for (j = 0; j < bridge.length; j++) {
      const bridgePosValue = bridge[j];
      console.log("### bridgePosValue: ", bridgePosValue);

      if (!bridgePosValue) {
        bridgeCovered = false;
        break;
      }
    }
    if (bridgeCovered) {
      result = i;
      break;
    }

    console.log("### bridgeCovered: ", bridgeCovered);
  }

  return result;
}

// TEST
// const bridgeSize = 5;
// const leaves = [1, 3, 1, 4, 2, 3, 5, 4];
// const rightSolution = 6;
// const result = solution(leaves, bridgeSize);
// console.log(
//   `### solution result is: ${result}, THE TEST HAS: ${
//     result === rightSolution ? "HAS PASSED" : "HAS FAILED"
//   }`
// );

// const bridgeSize2 = 6;
// const leaves2 = [1, 3, 1, 4, 2, 3, 5, 4];
// const rightSolution2 = -1;
// const result2 = solution(leaves2, bridgeSize2);
// console.log(
//   `### solution result is: ${result2}, THE TEST HAS: ${
//     result2 === rightSolution2 ? "HAS PASSED" : "HAS FAILED"
//   }`
// );

////////////////////////////////////////////////////////////////////////////////////////////////////

// solution B, improved, use a counter for empty spaces,
// no need to iterate bridge array to check if its covered.
// also keep a look up array to control leaves that fall in the same place,
// and do not decrease the empty spaces in that case
//  O(n), linear
function solutionB(a, x) {
  let bridge = Array(x);
  let result = -1;
  let emptyPositions = x;
  for (i = 0; i < a.length; i++) {
    let leavePosition = a[i];
    console.log("### leavePosition: ", leavePosition, " idx/time: ", i);
    let positionIsCovered = !!bridge[leavePosition - 1];
    console.log("### positionIsCovered in bridge: ", positionIsCovered);

    if (!positionIsCovered) {
      bridge[leavePosition - 1] = 1; // we put the first
      emptyPositions = emptyPositions - 1; // very important to track the bridge status
    } else {
      bridge[leavePosition - 1] = bridge[leavePosition - 1] + 1;
    }
    console.log("### bridge: ", bridge);
    console.log("### emptyPositions: ", emptyPositions);
    // is bridge covered
    const bridgeCovered = emptyPositions === 0;
    console.log("### bridge covered: ", bridgeCovered);

    if (bridgeCovered) {
      result = i;
      break;
    }

    console.log("### bridgeCovered: ", bridgeCovered);
  }

  return result;
}

// TEST
const bridgeSize = 5;
const leaves = [1, 3, 1, 4, 2, 3, 5, 4];
const rightSolution = 6;
const result = solutionB(leaves, bridgeSize);
console.log(
  `### solution result is: ${result}, THE TEST HAS: ${
    result === rightSolution ? "HAS PASSED" : "HAS FAILED"
  }`
);

const bridgeSize2 = 6;
const leaves2 = [1, 3, 1, 4, 2, 3, 5, 4];
const rightSolution2 = -1;
const result2 = solutionB(leaves2, bridgeSize2);
console.log(
  `### solution result is: ${result2}, THE TEST HAS: ${
    result2 === rightSolution2 ? "HAS PASSED" : "HAS FAILED"
  }`
);
