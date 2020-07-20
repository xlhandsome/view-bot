var shell = require('shelljs')

shell.exec('git add .')
shell.exec(`git commit -m ${JSON.stringify(new Date().toLocaleString())}`)
shell.exec(`git push origin master`);