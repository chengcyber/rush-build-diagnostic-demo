const path = require("path");
const { execSync } = require("child_process");
const { JsonFile } = require("@rushstack/node-core-library");

// !!! Read a file outside of the project directory
const outsideJsonFile = path.resolve(__dirname, "../../../outside.json");

const { outside } = JsonFile.load(outsideJsonFile);
console.log(`read outside: ${outside}`);

execSync(`tsc`);

// !!! Write a file outside of the project directory
const outsideLogFile = path.resolve(__dirname, "../../../outside.log");
JsonFile.save({ timestamp: String(Date.now()) }, outsideLogFile);
console.log(`wrote to outside.log`);
