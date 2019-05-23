let express = require("express");
var localStorage = require("localStorage");
//setup express app
let app = express();

app.get("/setlocal", (req, res) => {
  localStorage.setItem("myFirstKey", "myFirstValue");
  console.log(localStorage.getItem("myFirstKey"));
  res.send("user data added to local");
});
app.get("/getlocal", (req, res) => {
  let local = localStorage.getItem("myFirstKey");
  res.send(local);
});

//server listens to port 3000
app.listen(3000, err => {
  if (err) throw err;
  console.log("listening on port 3000");
});
