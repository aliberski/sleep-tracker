var fs = require('fs');

function deleteFolderRecursive(path) {
    console.log(` ✅  Deleting directory "${path}"...`);
    if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
        fs.readdirSync(path).forEach(function(file, index){
            var curPath = path + "/" + file;

            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};


function clean() {
    console.log("Cleaning working tree...");

    deleteFolderRecursive("./node_modules");
    deleteFolderRecursive("./android/build");
    deleteFolderRecursive("./android/app/build");
    deleteFolderRecursive("./ios/build");

    console.log(" ✅  Successfully cleaned working tree!");
}

clean();

module.exports.clean = clean;
