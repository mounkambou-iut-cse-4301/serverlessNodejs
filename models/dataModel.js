// dataModel.js

const data = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Bob", age: 40 },
  ];
  
  module.exports = {
    getAllData: () => data,
    getDataById: (id) => data.find((item) => item.id === id),
    addData: (newData) => data.push(newData),
  };