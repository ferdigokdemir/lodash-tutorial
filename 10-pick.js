const _ = require("lodash");
// Bir objenin istenilen propertilerini alır

const user = null;

console.log({
  name: user["name"],
  age: user["age"],
});

// console.log(_.pick(user, ["name", "age"]));
