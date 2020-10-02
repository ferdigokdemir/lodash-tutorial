const _ = require("lodash");
// Bir işlem zinciri oluşturur

const users = [
  { name: "Ahmet", age: 30 },
  { name: "Mehmet", age: 51 },
  { name: "Ayşe", age: 43 },
  { name: "Ali", age: 81 },
  { name: "Zeynep", age: 43 },
];

const youngest = _.chain(users).orderBy(["age"], ["desc"]).head().value();

console.log(youngest);
