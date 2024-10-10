let promise = new Promise(function (resolve, reject) {
  // do something
  var result = "something ok";
  console.log("### inside promise ...");

  if (result) {
    /** all good */
    console.log("### inside promise, resolve ok ...");
    resolve(result);
  } else {
    var error = "an error";
    reject(error);
  }
});

const finalResult = promise
  .then(function (result) {
    // do something with result
    console.log("### inside then 1 ...");
    var newResult = result + " part 2";
    return newResult;
  })
  .then(function (newResult) {
    // do something with newResult
    console.log("### inside then 2 ...");
    var finalResult = newResult + " part 3";
    return finalResult;
  })
  .then(function (finalResult) {
    console.log("### finalResult: ", finalResult);
  });
