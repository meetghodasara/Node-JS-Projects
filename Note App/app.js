const getNotes = require("./notes");
const yargs = require("yargs");

const command = process.argv[2];

// console.log(command);

if (command === "add") {
  console.log("Adding Notes!");
} else if (command === "remove") {
  console.log("Removing Notes!");
}
