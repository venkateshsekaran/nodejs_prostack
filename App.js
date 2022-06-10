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
/* const http = require("http")
  .createServer((req, res) => {
    res.end("Hello");
  })
  .listen(7000, (err) => {
    if (err) throw err;
    console.log("Success....");
  });
 */

// Express.js
var express = require("express");
var app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
//basic routing
app.get("/", (req, res) => {
  res.send("Root Requests");
});
app.get("/user", (req, res) => {
  res.send("User Data");
});

app.get("/employee", (req, res) => {
  res.send("employee Data");
});

app.get("/employee/user", (req, res) => {
  res.send("employee user Data");
});
app.post("/signup", (req, res) => {
  res.send("Successfully updated");
});

app.listen(process.env.PORT, (err) => {
  console.log(process.env.PORT);
  if (err) throw err;
  console.log("Server ....");
});
