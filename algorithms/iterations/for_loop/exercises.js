/////////////////////// FACTORIAL ///////////////////////

// We are given some positive integer n. Let’s compute the factorial of n and assign
// it to the variable factorial.
// The factorial of n is n! = 1 * 2 * 3 . . . * n.
// We can obtain it by starting with 1 and multiplying it by all the integers from 1 to n.
function getFactorial(n) {
  var factorial = 1;
  for (i = 1; i <= n; i++) {
    console.log(`### inside i ${i} n: ${n}`);
    factorial = factorial * i;
  }
  console.log(`### factorial of ${n} is ${factorial}`);
  return factorial;
}
// test
const test1 = getFactorial(3);
// console.log(`### TEST ${test1 === 6 ? "PASSED" : "NOT PASSED"}`);
const test2 = getFactorial(4);
// console.log(`### TEST ${test2 === 24 ? "PASSED" : "NOT PASSED"}`);

/////////////////////// TRIANGLE ///////////////////////
/*
 * Let’s print a triangle made of asterisks (*) separated by spaces. The triangle
 * should consist of n rows, where n is a given positive integer, and consecutive rows should
 * contain 1, 2, . . . , n asterisks. For example, for n = 4 the triangle should appear as follows:
 * *
 * **
 * ***
 * ****
 */

/**
 * We need to use two loops, one inside the other: the outer loop should print one row in
 * each step and the inner loop should print one asterisk in each
 */

function printTriangle(rows) {
  // iterate the rows
  for (i = 0; i < rows; i++) {
    // console.log(`inside row i: ${i}`);

    var renderedRow = "";
    // iterate the items of the row -> concatenate the * to render
    for (j = 0; j <= i; j++) {
      //   console.log(`inside item i: ${i} j: ${j}`);
      renderedRow = renderedRow + "*";
    }
    console.log(renderedRow);
  }
}

printTriangle(4);
