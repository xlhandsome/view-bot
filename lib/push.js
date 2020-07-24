var shell = require('shelljs');
var fs = require('fs');

const path = require('path');
const resolve = (dir) => path.resolve(__dirname,'../',dir);

const readSuccess = function(err,data){
  var fileJson = JSON.parse(data.toString());
  try{
    shell.echo('正在上传github,请等待···');
    shell.echo(`上传版本${fileJson.version}`);
    shell.exec(`git add .`);
    shell.exec(`git commit -m 版本更新至${fileJson.version}更新时间${JSON.stringify(new Date().toLocaleString())}内容${fileJson.miaoshu}`);
    shell.exec(`git push origin master`);
    shell.echo('上传完成！')
  }catch(e){
    shell.echo('上传失败')
    console.error(e)
  }
}
fs.readFile(resolve('package.json'),readSuccess);

