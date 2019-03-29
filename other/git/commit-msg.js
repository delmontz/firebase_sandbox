/* git hoooks commit-msg */
/* コミットメッセージのprefix確認 例： hoge: */
const boxen = require('boxen');
const fs = require('fs');
// プレフィックス一覧
const prefix = ['fix', 'add', 'feat', 'refactor', 'perf', 'style'];

//コミットメッセージ取得、チェック
let git_message = fs.readFileSync('./.git/COMMIT_EDITMSG', 'utf8').trim();
let isMissmatch = !prefix.some(str => {
   let pattern = new RegExp(String.raw`^${str}:\s.*`, 'i');
   return git_message.match(pattern);
});

if(isMissmatch){
   console.log(boxen('☠⚠️コミットメッセージにプレフィックスをつけてね @delmontz  prefix:半角スペース ⚠️️☠', {
      borderStyle: 'double',
      align: 'center'
   }));
   //以上終了 コミット中止
   process.exit(1);
}else{
   console.log(boxen('進捗〜👆👆 進捗〜 💮💮', {
      borderStyle: 'double',
      align: 'center'
   }));
   //正常終了
   process.exit(0);
}