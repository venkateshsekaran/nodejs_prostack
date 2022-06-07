const fs = require("fs");
// synchronously read
//let data = fs.readFileSync("test.txt", "utf-8");
//console.log(data);

// asynchronous read

/*fs.readFile("test.txt", "utf-8", (err, newData) => {
  console.log(newData);
});*/

// asynchronous read and write
fs.readFile("test.txt", "utf-8", (err, newData) => {
  fs.writeFile("one.txt", newData, (err) => {
    if (err) throw err;
    console.log("Writing file successfully");
  });
});
