const _ = require("lodash");
// Bir array içinde belirli kriterlere göre arama yapar

const users = [
  { name: "Ahmet", age: 30 },
  { name: "Mehmet", age: 51 },
  { name: "Ayşe", age: 43 },
  { name: "Ali", age: 81 },
  { name: "Zeynep", age: 43 },
];

const user = _.find(users, { name: "Ahmet" });
console.log(user);
