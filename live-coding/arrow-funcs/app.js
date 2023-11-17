let fullname = "Jakob Rolandsson";

/*function splitName(name) { // Gör klart funktionen
  let parts = name.split(" ");
  let firstName = parts[0];
  let surname = parts[1];

  // returnerna "Jakob, Rolandsson"
  return `${surname[0]}, ${firstName}`
}*/

/*
const splitName = function(name) {
  let parts = name.split(" ");
  let firstName = parts[0];
  let surname = parts[1];

  return `${surname[0]}, ${firstName}`
}
*/

/*const splitName = (name) => { // arrow syntax
  let parts = name.split(" ");
  let firstName = parts[0];
  let surname = parts[1];

  return `${surname[0]}, ${firstName}`
}*/

/*const splitName = (name) => { // arrow syntax
  return `${name.split(" ")[0]}, ${name.split(" ")[1]}`
}*/

const splitName = (name) => `${name.split(" ")[0]}, ${name.split(" ")[1]}`;

let transformedName = splitName(fullname);

console.log(transformedName) //"Jakob, Rolandsson"

// function throwDice() {
//   return Math.floor((Math.random() * 6)) + 1;
// }

const throwDice = () => Math.floor((Math.random() * 6)) + 1;

console.log(throwDice());