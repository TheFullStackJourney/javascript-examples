/**
 * Stack and queues
 * Queue -> FIFO First In First Out
 *   - add items to the tail of the queue
 *   - consume items from the head of the queue
 * Stack -> LIFO, Last In First Out -> push , pop -> is built with an array and head pointer
 *   - add items to the head of the queue, enqueue
 *   - consume items from the head of the queue, dequeue
 *  - with arrays is limited by the original array size
 *  - to make it dynamic in size you need a linked list
 */

/**
 * Write a piece of code that accepts a string and returns whether that string is valid or not
 * The string can only contain one of different types of characters.
 * Open or close round brackets ()
 * Curly Brackets {}
 * Square brackets []
 * Check if the string is properly nested or not
 * e.g.
 * properly nested "[()()]"
 * invalid "[()]()]"
 * properly nested "[{()}]"
 * invalid "]["
 * properly nested "(){}[](){}{}"
 * There is no importance or weight in the type of ccharacters, its just the nesting has to be ok
 *
 */

// naive approach, use a stack maybe,
// push or pop from the stack based on the type of char

function solution(theString) {
  let valid = 1;
  const theStringArray = theString.split("");
  console.log("### theStringArray: ", theStringArray);
  const theStack = new Array();

  const findOpening = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  if (theStringArray.length === 0) {
    return 1;
  }
  if (theStringArray.length === 1) {
    return 0;
  }

  theStringArray.forEach((char) => {
    console.log("### char: ", char);
    // if char is left we push it
    if (char === "(" || char === "{" || char === "[") {
      // opening char
      theStack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      // closing char
      console.log("### closing char: ", char);

      const lastInTheStack = theStack.pop(char);
      console.log("### lastInTheStack: ", lastInTheStack);

      if (findOpening[char] === lastInTheStack) {
        // is the last inserted in the stack an opening for the char? all good, keep it removed
      } else {
        // there is a pair mismatching, should fail
        console.log(
          `### pairing mismatch, for the ending char : `,
          char,
          " the corresponding opening should be: ",
          findOpening[char],
          " instead we got a: ",
          lastInTheStack
        );

        valid = 0;
        return;
      }
    }
    console.log("### theStack: ", theStack);
  });

  return valid;
}

// TESTS
// const input = "{([])}";
// const expectedResult = 1;

// const input = "{([))}";
// const expectedResult = 0;

// const input = "[]";
// const expectedResult = 1;

// const input = "[}";
// const expectedResult = 0;

// const input = "[}}";
// const expectedResult = 0;

// const input = "{";
// const expectedResult = 0;

// const input = "}";
// const expectedResult = 0;

// const input = "";

const result = solution(input);
console.log(
  `### solution result for input "${input}" is: ${result} THE TEST HAS: ${
    result === expectedResult ? "HAS PASSED" : "HAS FAILED"
  }`
);
