function readStreamAsString(stream, callback) {
  var data = "";
  stream.on("data", function(chunk) {
    data += chunk.toString();
  });
  stream.on("end", function() {
    callback(null, data);
  });
  stream.on("error", function(error) {
    callback(error);
  });
}

function GET(text) {
  var http =require("http");
  var request = http.request({
    hostname: "eloquentjavascript.net",
    path: "/author",
    method: "get",
    headers: {Accept: text}
  }, function(response) {
    readStreamAsString(response, console.log);
    console.log(response.responseText);
    console.log("");
  });
  request.end();
}

//require("./task36.js");

GET("text/plain");
GET("text/html");
GET("application/json");