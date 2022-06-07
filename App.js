//create server- http : node js core module
/* const http = require("http");
const server = http.createServer((req, resp) => {
  resp.end("Hello You got it");
});
server.listen(8000, (err) => {
  if (err) throw err;
  console.log("Server running ...");
}); */

//concise code
const http = require("http")
  .createServer((req, res) => {
    res.end("Hello");
  })
  .listen(7000, (err) => {
    if (err) throw err;
    console.log("Success....");
  });
