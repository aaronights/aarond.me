var fs = require('fs');
var child_process = require('child_process')
fs.renameSync('./docs/', './dist/');
child_process.execSync('gridsome build');
fs.renameSync('./dist/', './docs/');