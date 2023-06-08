const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./UserRouter");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/v1", router);

app.get("/", (req, res) => {
  console.log(path.join("file", __dirname + "/index.html"));
  res.sendFile(path.join(__dirname + "/index.html"));
});

// app.get("/test", (req, res) => {
//   res.send(`
//   <html><h2 style="color: pink;background: yellow;">testing :></h2></html>
//   `);
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
