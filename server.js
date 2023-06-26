import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);

var app = express();
var directory = "/dist";

app.use(express.static(path.dirname(__filename) + directory));

app.get("*", function (req, res) {
  res.sendFile("index.html", { root: path.join(path.dirname(__filename), directory) });
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Listening on", port);
});
