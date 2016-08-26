function urlToPath(url) {
  var path = require("url").parse(url).pathname;
  return "." + decodeURIComponent(path).replace(/\.\.\/|\\/g, "");
}

console.log(urlToPath("http://myhostname:8000/../.config/config/google-chrome/Default/Web%20Data"));
console.log(urlToPath("http://myhostname:8000/../.ssh/id_dsa"));
console.log(urlToPath("http://myhostname:8000/../../../etc/passwd"));