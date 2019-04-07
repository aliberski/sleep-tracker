const clean = require('./clean.js');


var exec = require('child_process').execSync,
    child;

console.log(` ℹ️  Installing dependencies`);

child = exec('npm install', {stdio:[0,1,2]});

console.log(` ℹ️  Linking react-native`);

child = exec('npm run link', {stdio:[0,1,2]});
