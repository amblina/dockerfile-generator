var util = require('./util'),
    argv = require('optimist')
    .usage('Usage: $0 -p [num]')
    .demand(['p'])
    .alias('d', 'dir')
    .alias('p', 'port')
    .alias('m', 'main')
    .alias('a', 'author')
    .describe('d', 'Directory of the project')
    .describe('p', 'Port to expose')
    .describe('m', 'Main script')
    .describe('a', 'Author of the file')
    .default('d', '.')
    .default('m', 'server.js')
    .default('a', 'Mohamed Labouardy <mohamed@labouardy.com>')
    .argv;


var path=argv.d;
var port=argv.p;
var main=argv.m;
var author=argv.a;
var file=path+'/Dockerfile';

module.exports={
  generate:function(){
    util.showBanner();
    util.generateDockerFile(author, port, main, file);
  }
}
