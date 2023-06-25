import express from "express";

var app = express();
var directory = "/dist";
app.use(express.static(__dirname + directory));

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Listening on", port);
});
