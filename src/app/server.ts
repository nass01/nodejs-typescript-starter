/*const express = require("express")*/
import express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World2!");
});

const port = 3000;
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log("Example app listening on port", port);
});
