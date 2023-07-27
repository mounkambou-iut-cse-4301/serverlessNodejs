// apiController.js

const dataModel = require("../models/dataModel");

module.exports = {
  getAllData: (req, res) => {
    const data = dataModel.getAllData();
    res.json(data);
  },
  getDataById: (req, res) => {
    const id = parseInt(req.params.id);
    const data = dataModel.getDataById(id);
    if (data) {
      res.json(data);
    } else {
      res.status(404).send("Data not found");
    }
  },
  addData: (req, res) => {
    const newData = req.body;
    dataModel.addData(newData);
    res.status(201).send("Data added successfully");
  },
};