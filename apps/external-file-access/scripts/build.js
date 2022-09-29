const path = require("path");
const { execSync } = require("child_process");
const { JsonFile } = require("@rushstack/node-core-library");

// !!! Access a file outside of the project directory
const outsideJsonFile = path.resolve(__dirname, "../../../outside.json");

const { outside } = JsonFile.load(outsideJsonFile);
console.log(`read outside: ${outside}`);

execSync(`tsc`);
