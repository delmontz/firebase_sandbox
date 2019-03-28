const boxen = require('boxen');
const fs = require('fs');

console.log(fs.readFileSync('./.git/COMMIT_EDITMSG', 'utf8').trim());
console.log(boxen('☠☠☠☠☠☠ ☠☠☠ ☠☠☠  コミット ☠☠☠☠☠☠ ☠☠☠ ☠☠☠ ☠☠☠ ', {
   borderStyle: 'double',
   align: 'center'
}));
process.exit(0);