const fs = require("fs");
const { json } = require("stream/consumers");

// const book = {
//     title: "Ego is the enemy",
//     author : "Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);
// fs.writeFileSync('1-json.json' , bookJSON);

// const dataBuffer = fs.readFileSync(1-json.json);
// const DataJSON = dataBuffer.toString();
// const data = JSON.parse(DataJSON);
// console.log(data.name);
const dataBuffer = fs.readFileSync("1-json.json");
const parseData = JSON.parse(dataBuffer);
parseData.name = "Meet";
parseData.age = 19;
const writenData = JSON.stringify(parseData);
fs.writeFileSync("1-json.json", writenData);
// console.log(parseData.name);
