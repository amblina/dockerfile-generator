var fs=require('fs'),
    AsciiBanner = require('ascii-banner');

module.exports={
  showBanner:function(){
    AsciiBanner
      .write('Dockerfile Generator')
      .color('blue')
      .font('Thin')
      .after('>v{{version}}', 'yellow')
      .before('>Developed by {{author}}<')
      .out();
  },
  generateDockerFile:function(author, port, main, file){
    fs.readFile('./lib/template',"utf8",function(err, content){
      var baseLine="FROM centos:centos6\n";
      var maintainerLine="MAINTAINER "+author+"\n";
      var portLine="EXPOSE "+port+"\n";
      var cmdLine="CMD [\"node\",\""+main+"\"]";
      var data=baseLine+maintainerLine+content+portLine+cmdLine;
      fs.writeFile(file,data,function(err){
        console.log('Successfuly created !');
      });
    });
  }
}
