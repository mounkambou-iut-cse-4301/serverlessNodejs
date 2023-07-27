// server.js
require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const apiController = require("./controllers/apiController");

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/data", apiController.getAllData);
app.get("/api/data/:id", apiController.getDataById);
app.post("/api/data", apiController.addData);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports=app;