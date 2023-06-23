const express = require("express");
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

function sum(n) {
  let resSum = 0;
  for (let i = 0; i < n; i++) {
    resSum += i;
  }
  return resSum;
}

app.post("/", (req, res) => {
  //   let tillCount = req.query.counter; //query params to send data
  let tillCount = req.body.counter;
  //   console.log(req.headers, req.headers.counter);
  console.log(req.body, req.body.counter); //body is not part of express, we use body-parser library
  const result = sum(tillCount);
  // res.send(`result ${result}`)
  res.send(`${result}`);
});

app.listen(3000, () => {
  console.log("server started");
});
