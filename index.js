const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyparser.json());

app.listen(8000, () => {
  console.log("Example app listning on port");
});
// get api call
app.get("/", (req, res) => {
  res.send("Calculator using Express!");
});

// post api

app.post("/add/result", (req, res) => {
  const { num1, num2 } = req.body;
  console.log(num1);
  console.log(num2);
  let adding = num1 + num2;
  res.send("sum of two number " + adding);
  res.send("Sumbit successfully");
});

app.post("/subtract", (req, res) => {
  const { num1, num2 } = req.body;
  console.log(num1);
  console.log(num2);
  let subtracting = num1 - num2;
  res.send("Subtract of two number " + subtracting);
  res.send("Sumbit successfully");
});

app.post("/multiply", (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 * num2;

  res.send("Multiplication of two number " + result);
  res.send("Sumbit successfully");
});

app.post("/divide", (req, res) => {
  const { num1, num2 } = req.body;
  if (num2 === 0) {
    res.status(400).json({ error: "Divide by zero error" });
  } else {
    const divide = num1 / num2;
    res.send("Divide of two number " + divide);
    res.send("Sumbit successfully");
  }
});
