const chalk = require('chalk');

function showColorMessage() {
  console.log(chalk.blue.bold('This is a colorful message from Chalk! 🎨'));
}

module.exports = showColorMessage;