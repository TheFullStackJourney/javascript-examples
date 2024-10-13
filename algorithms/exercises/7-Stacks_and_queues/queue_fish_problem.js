/**
 * Stack
 */

/**
 * Fishes swimming to the left are of value 0
 * Fishes swimming to the left are of value 1
 * How many fish left
 *
 */

// naive approach, use a stack maybe,
// push or pop from the stack based on the direction, not working, need adjusting

function solution(a, b) {
  // a is the direction, b the weight
  let valid = true;
  console.log("### directions: ", a);
  console.log("### weights: ", b);
  const theStack = new Array();
  let rightSideSurvivors = 0;

  a.forEach((direction, index) => {
    console.log("### direction: ", direction ? "right" : "left");
    // if fish is going to the right we put in the stack to compare it
    // later wth one coming to the left
    if (direction) {
      console.log("### coming from the left, weight: ", b[index]);
      // goin right, push the weight in the stack
      theleftStackFish.push(b[index]);
    } else {
      // going left
      // compare and fight, if left one loses, its taken off the stack
      const stackFishWeight = theleftStackFish.pop();
      const rightComingFish = b[index];
      console.log("### coming from the right, weight: ", b[index]);
      console.log("### stack fish, weight: ", stackFishWeight);

      if (stackFishWeight > rightComingFish) {
        // put it back in the stack, it survived
        theleftStackFish.push(stackFishWeight);
      } else {
        // else, the fish in the stack was eaten, stays removed, but he fish fro mthe right survives
        rightSideSurvivors = rightSideSurvivors + 1;
      }
    }
    console.log("### theStack: ", theStack);
  });

  console.log(
    "### no more iterations, fish in theStack (left fishes survivors): ",
    theleftStackFish.length
  );
  console.log(
    "###  fish in the right side that survided: ",
    rightSideSurvivors
  );
  const totalSurvivors = theleftStackFish.length + rightSideSurvivors;
  console.log("###  total fish that survived: ", totalSurvivors);

  return totalSurvivors;
}

// // TESTS
// const direction = [0, 1, 0, 1, 0, 0];
// const weights = [2, 6, 4, 3, 1, 5];

// const result = solution(direction, weights);
// console.log(
//   `### solution result is: ${result} THE TEST HAS: ${
//     result == 2 ? "HAS PASSED" : "HAS FAILED"
//   }`
// );

// proper solution
function solutionB(A, B) {
  // A is weights, B is directions
  let leftStackFish = [];
  let rightSurvivorFish = 0;

  for (i = 0; i < A.length; i++) {
    let nextFishWeight = A[i];
    let direction = B[i];
    if (direction === 1) {
      // fish coming from the left
      leftStackFish.push(nextFishWeight);
    } else {
      // fish coming from the right
      // compare and fight
      let fishFromStackWeight =
        leftStackFish.length === 0 ? -1 : leftStackFish.pop();
      // if the left stack is empty, we let the right side fish win by setting -1 as the left fish weight
      if (fishFromStackWeight > nextFishWeight) {
        // fish from the stack wins, put it back
        leftStackFish.push(fishFromStackWeight);
      } else {
        // now we still have to fight any other fish in the stack , for the  right side fish to survive
        while (
          fishFromStackWeight !== -1 &&
          fishFromStackWeight < nextFishWeight
        ) {
          fishFromStackWeight =
            leftStackFish.length === 0 ? -1 : leftStackFish.pop();
        }
        // IMPORTANT: if the fish from the right won against all the fish form the stack, left, then it SURVIVED
        // the fish from the right wins against all in the left.
        // and add 1 winner/survivor for the right fishes
        if (fishFromStackWeight === -1 && leftStackFish.length === 0) {
          rightSurvivorFish = rightSurvivorFish + 1;
        } else {
          // the left fish has been eaten, put left fish back into the stack
          leftStackFish.push(fishFromStackWeight);
        }
      }
    }
  }

  return leftStackFish.length + rightSurvivorFish;
}

// TESTS
// result 2
// const direction = [0, 1, 0, 1, 0, 0];
// const weights = [2, 6, 4, 3, 1, 5];

// result: 2
const direction = [0, 1, 1, 0, 0];
const weights = [4, 8, 2, 6, 7];

const result = solutionB(weights, direction);
console.log(
  `### solutionB result is: ${result} THE TEST HAS: ${
    result == 2 ? "HAS PASSED" : "HAS FAILED"
  }`
);
