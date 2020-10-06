const { program } = require('commander');
const colors = require('colors');
const fs = require('fs-extra');

program.parse(process.argv);

const projname = program.args[0] || 'my-sprint-app';

console.log('Welcome to SPRINT!'.blue.bold)
console.log('Creating project '.yellow + projname.yellow.bold + '!'.yellow);
fs.copySync(__dirname + '/template', './' + projname, {});
console.log('Created project '.green + projname.green.bold + '!'.green);