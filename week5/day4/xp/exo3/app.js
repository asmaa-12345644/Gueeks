const { readFile, writeFile } = require("./fileManager");

const content = readFile("Hello World.txt");
console.log("Read from file:", content);

writeFile("Bye World.txt", "Writing to the file");
console.log("Wrote to Bye World.txt");
