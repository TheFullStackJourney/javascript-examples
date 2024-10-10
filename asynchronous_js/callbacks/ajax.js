function get(url, successCallback, failCallback) {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open("GET", url);
  httpRequest.onload = function () {
    if (httpRequest.status !== 200) {
      failCallback(httpRequest.status);
    } else {
      // once data is back OK pass it to the Call Back
      successCallback(httpRequest.responseText);
    }
  };
  httpRequest.send();
}

function successHandler(data) {
  const dataObj = JSON.parse(data);
  console.log("### Users: ", dataObj);
  dataObj?.forEach((user) =>
    $("#result").append(
      '<div id="' +
        stringToHash(user.username) +
        '">' +
        user.username +
        "</div>"
    )
  );

  testResults(dataObj);
}

function failHandler(status) {
  console.log("### ERROR in API call: ", status);
}

const url = "http://localhost:3000/users";
// const url = "http://localhost:3000/noEndpoint"; // to make it fail, we put a wrong endpoint

get(url, successHandler, failHandler);

// TEST
function testResults(users) {
  users?.forEach((user) => {
    var result = $("#" + stringToHash(user.username));
    console.log("### result user: ", $(result).text());
    // console.log("### result user: ", result);

    if (!result || user.username !== $(result).text()) {
      throw Error("### DOM element not found. TEST not passed.");
    }
  });
  console.log("### TEST PASSED !");
}

function stringToHash(string) {
  let hash = 0;

  if (string.length == 0) return hash;

  for (i = 0; i < string.length; i++) {
    char = string.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  return hash;
}
