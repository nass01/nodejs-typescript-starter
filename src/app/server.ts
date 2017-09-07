/*const express = require("express")*/
import express = require("express");
const app = express();

<<<<<<< HEAD
/*  DO NOT REMOVE THIS COMMENT!!
Shouldn't this be changed into 
app.get("/", (req: any, res: any) => { 
Or even something more specific.
In any case do not use "implicit any"  
*/
=======
>>>>>>> 6e3ba0068b6f9a6dda42ba7521998f15244fcf26
app.get("/", (req, res) => {
  res.send("Hello World2!");
});

const port = 3000;
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log("Example app listening on port", port);
});
