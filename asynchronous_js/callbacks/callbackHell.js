// The callback hell is not related with the indentation complexity

var runCBHellExample = "nestedUnnamedFunctions";
// var runCBHellExample = "namedFunctions";
// var runCBHellExample = "separateCallbacks";
// var runCBHellExample = "singleCallback";
// var runCBHellExample = "manyCallbacks";

// example with named functions
if (runCBHellExample === "nestedUnnamedFunctions") {
  setTimeout(function () {
    console.log("one  !");

    setTimeout(function () {
      console.log("two  !");

      setTimeout(function () {
        console.log("three  !");
      }, 3000);
    }, 3000);
  }, 3000);
}

// example with named functions ()
if (runCBHellExample === "namedFunctions") {
  function one(cb) {
    console.log("one named !");

    setTimeout(cb, 3000);
  }

  function two(cb) {
    console.log("two named !");

    setTimeout(cb, 3000);
  }

  function three() {
    console.log("three named!");
  }

  one(function () {
    two(three);
  });
}

// callback hell, first solution approach: separate callbacks
if (runCBHellExample === "separateCallbacks") {
  function trySomething(ok, err) {
    setTimeout(function () {
      var num = Math.random();

      if (num > 0.5) ok(num);
      else err(num);
    }, 1000);
  }

  trySomething(
    function ok(num) {
      console.log("Success: " + num);
    },

    function err(num) {
      console.log("Error: " + num);
    }
  );
}

// callback hell, second solution approach: single callback, err first style (AKA node style)
if (runCBHellExample === "singleCallback") {
  function trySomething(cb) {
    setTimeout(function () {
      var num = Math.random();

      if (num > 0.5) {
        cb(null, num);
      } else {
        cb("Too low!");
      }
    }, 1000);
  }

  trySomething(function (err, num) {
    if (err) {
      console.log("Error: " + err);
    } else {
      console.log("Success: " + num);
    }
  });
}

if (runCBHellExample === "manyCallbacks") {
  // It gets worse when we have many nested callbacks

  // simulates a call somewhere, returns the passed object after 1 sec

  function getData(d, cb) {
    setTimeout(function () {
      cb(d); // returns the passed obj
    }, 1000);
  }

  // hell

  getData(10, function (num1) {
    // when it comes back, the cb is executed, I want to add 1 to the result.

    var x = 1 + num1;

    // and want to call again another async function

    getData(30, function (num2) {
      // when the second comes back, the cb is executed, and I want to add 1 to the result.

      var y = 1 + num2;

      // and again I want to call another async function to do something else

      getData("Meaning of life " + (x + y), function (answer) {
        console.log(answer);
      });
    });
  });
}
