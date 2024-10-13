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

// performant solution, use another data structure to track the maxValue and the baseline change

function solution(n, a) {
  const counters = Array(n).fill(0);
  let maxCounter = 0;
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
      maxCounter = positionInCounter + 1;
      maxValue = maxValue < newValue ? newValue : maxValue;
      console.log("### counters: ", counters);
      console.log("### maxCounter: ", maxCounter);
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
  console.log("### maxCounter: ", maxCounter);
  console.log("### maxValue: ", maxValue);
  console.log("### baseline: ", baseline);

  for (j = 0; j < counters.length; j++) {
    // increment up to the baseline, all those who where left behind the baseline
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
