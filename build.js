var fs = require('fs');
var child_process = require('child_process')
try {
    fs.renameSync('./docs/', './dist/');
}
catch(err){
    console.log(err)
}
var build = child_process.execSync('gridsome build');
build.stdout.on('data', function(data) {
    console.log(data)
})
try {
    fs.renameSync('./dist/', './docs/');
}
catch(err){
    console.log(err)
}