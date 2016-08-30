var http =require("http");
var request = http.request({
  hostname: "localhost",
  port: 8000,
  path: "/1",
  method: "MKCOL"
});

request.end();
//MKCOL