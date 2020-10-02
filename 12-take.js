const _ = require("lodash");
// Bir array içinden belirtilen miktarda eleman alır

const users = [
  { name: "Ahmet", age: 30 },
  { name: "Mehmet", age: 51 },
  { name: "Ayşe", age: 43 },
  { name: "Ali", age: 81 },
  { name: "Zeynep", age: 43 },
];

console.log(_.take(users, 2));
