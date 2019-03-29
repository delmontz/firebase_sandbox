const execSync = require('child_process').execSync;

const branch_name = execSync(`git branch --contains`).toString().match(/\* (?:\(no branch, rebasing )?([^)\n]+)/)[1];

if (branch_name === 'develop' || branch_name === 'master' || branbranch_name === 'release') {
   console.log(boxen(`☠⚠️${branch_name}ブランチにpushしないで！！ @delmontz⚠️️☠`, {
      borderStyle: 'double',
      align: 'center'
   }));
   //異常終了 push中止
   process.exit(1);
}else{
   //正常終了
   process.exit(0);
}
