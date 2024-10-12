function bigOConstant(arr) {
  const start = window.performance.now();
  // console.log("### start: " + start);

  console.log("### ELEM: ", arr[4]); // Always takes the same time, regardless of array size, to find the same position
  const end = window.performance.now();

  // console.log("### end: " + end);
  const diff = new Number(end - start);
  console.log("### Time diff: " + new Number(end - start));
  return diff;
}

function findElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
  return false;
}

function bigOLinear(arr) {
  //Linear Time Complexity
  const start = window.performance.now();
  console.log("### start: " + start);
  findElement(arr, 3);
  const end = window.performance.now();
  console.log("### end: " + end);
  const diff = new Number(end - start);
  console.log("### Time diff: " + new Number(end - start));
  return diff;
}

function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

function createLongArray() {
  const arr = [];
  for (let i = 0; i < 10000; i++) {
    arr.push(i);
  }
  return arr;
}

// run
const arr = [1, 2, 3, 4, 5];
const arrLong = createLongArray();

// console.log("### bigOConstant run small array: ", bigOConstant(arr));
// console.log("### bigOConstant run long array: ", bigOConstant(arrLong));

console.log("### bigOLinear run small array: ", bigOLinear(arr));
console.log("### bigOLinear run long array: ", bigOLinear(arrLong));

function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return true;
    if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return false;
}
