var chalk = require('chalk');
var figlet = require('figlet');

console.log(
  chalk.yellow(
    figlet.textSync('Dashboard',
      {
        horizontalLayout:'full',
        font:'ghost'
      })
  ));
