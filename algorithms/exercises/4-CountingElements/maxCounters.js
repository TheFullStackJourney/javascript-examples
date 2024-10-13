/**
 * Inputs are:
 * n, quantity of counters e.g. 5 => so we will have to maintain a coounters array like [0,0,0,0,0]
 * list of instructions:
 * - increase(x)
 * - max counter
 * Represented by another array like [3,4,4,6,1,4,4],
 * each value represents the counter that has to be increased by 1, but if the value is higher then n
 * then the instruction is to max all the counter to the highest
 * So, in this example
 *
 * n=5
 * counters: [0,0,0,0,0]
 * Instructions: [3,4,4,6,1,4,4]
 * processing instructions:
 * - pos 0: increase counter 3
 * - pos 1: increase counter 4
 * - pos 2: increase counter 4
 * - pos 3: value > n => max counters
 * - pos 4: increase counter 1
 * - pos 5: increase counter 4
 * - pos 6: increase counter 4
 *
 * result: [3,2,2,4,2]
 */

// naive and quadratic solution, every time you find a max counter instruction, you iterate all over the counters
// array to max them. O(n*n), potentially we may need to iterate n*m, "n" is the counters and "m" is the array of instructions

// performant solution, use another data structure to track the maxValue and the baseline change
// O(n+n), we iterate over the instructions once, and over the counters once

function solution(n, a) {
  const counters = Array(n).fill(0);
  let maxValue = 0;
  let baseline = 0;

  console.log("### n: ", n, " a: ", a);

  for (i = 0; i < a.length; i++) {
    const value = a[i];
    console.log("### value: ", value, " pos: ", i);
    console.log("### n: ", n, " a: ", a);

    if (value <= n) {
      console.log("### increase: ");

      // normal increase
      const positionInCounter = value - 1; // positions represented in the values are 1 based,
      //  but in the array are 0 based
      console.log("### baseline: ", baseline);

      let newValue;
      if (counters[positionInCounter] < baseline) {
        console.log("### increase past the baseline: ");
        // the counter is behind the baseline
        // move the counter one forward past the baseline
        newValue = counters[positionInCounter] + baseline + 1;
      } else {
        console.log("### increase just by 1: ");
        newValue = counters[positionInCounter] + 1;
      }

      counters[positionInCounter] = newValue;
      maxValue = maxValue < newValue ? newValue : maxValue;
      console.log("### counters: ", counters);
      console.log("### maxValue: ", maxValue);
    } else {
      // max out all or track the max out somehow
      console.log(
        "### MAX OUT, increase the baseline: ",
        baseline,
        "to ",
        maxValue
      );

      baseline = maxValue;
    }
  }
  console.log("### maxValue: ", maxValue);
  console.log("### baseline: ", baseline);

  for (j = 0; j < counters.length; j++) {
    // increment up to the baseline, all those counters who where left behind the baseline
    if (counters[j] < baseline) {
      counters[j] = baseline;
    }
  }
  return counters;
}

// test

// TESTS
const input = [3, 4, 4, 6, 1, 4, 4];
const n = 5;
const result = solution(n, input);
console.log(
  `### solution result for input ${input} and n: ${n}  is: ${result} THE TEST HAS: ${
    result.toString() == "3,2,2,4,2" ? "HAS PASSED" : "HAS FAILED"
  }`
);

// another solution
/**
 * This is the solution for CountingElements > MaxCounters
 * This is marked as RESPECTABLE difficulty
 */

function solutionSuperEfficient(N, A) {
  let counters = new Array(N).fill(0);
  let start_line = 0;
  let current_max = 0;
  A.forEach((instruction) => {
    let index = instruction - 1;
    if (instruction > N) start_line = current_max;
    else if (counters[index] < start_line) counters[index] = start_line + 1;
    else counters[index] += 1;
    if (instruction <= N && counters[index] > current_max)
      current_max = counters[index];
  });
  for (let i = 0; i < counters.length; i++) {
    if (counters[i] < start_line) counters[i] = start_line;
  }
  return counters;
}

// test

// TESTS
const result2 = solutionSuperEfficient(n, input);
console.log(
  `### solution result for input ${input} and n: ${n}  is: ${result2} THE TEST HAS: ${
    result2.toString() == "3,2,2,4,2" ? "HAS PASSED" : "HAS FAILED"
  }`
);
