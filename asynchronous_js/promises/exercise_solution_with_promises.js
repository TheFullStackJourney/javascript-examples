function fakeAjax(url, cb) {
  var fake_responses = {
    file1: "The first text",
    file2: "The middle text",
    file3: "The last text",
  };

  var randomDelay = (Math.round(Math.random() * 1e4) % 8000) + 1000;

  console.log("Requesting: " + url);

  setTimeout(function () {
    cb(fake_responses[url]);
  }, randomDelay);
}

function output(text) {
  console.log(text);
}

// **************************************

function getFile(file) {
  return new Promise(function (resolve) {
    fakeAjax(file, resolve);
  });
}

// Request all files at once in

// "parallel" via `getFile(..)`.

var p1 = getFile("file1");
var p2 = getFile("file2");
var p3 = getFile("file3");

// Render as each one finishes,
// but only once previous rendering
// is done.

p1.then(output)
  .then(function () {
    return p2;
  }) // p1 resolved , go and wait for p2 to finish, but if p2 has already been resolved it will execute.then immediately ...
  .then(output) // if p2 comes back before it will be resolved already when p1 resolves
  .then(function () {
    return p3;
  })
  .then(output)
  .then(function () {
    output("Complete!");
  });
