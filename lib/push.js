var shell = require('shelljs')

console.log("我进来了")
shell.exec('git add .')
shell.exec(`git commit -m ${JSON.stringify(new Date().toLocaleString())}`)
shell.exec(`git push origin master`);
console.log("我出来了")