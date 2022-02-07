const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  console.log(num1, num2);
  const result = num1 + num2;
  console.log(result);
  res.send(`The result of the calculation is ${result}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
