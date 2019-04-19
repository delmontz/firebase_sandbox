const functions = require('firebase-functions');

exports.rest = functions.region('asia-northeast1').https.onRequest((req, res) => {
   const cost = req.query.cost;
   let data;
   if(!cost){
      data = {
         unsei: '天罰',
         okotoba: 'お布施を求む'
      }
   }else if(cost < 100){
      data = {
         unsei: '大凶',
         okotoba: '神を信じよう'
      }
   }else{
      data = {
         unsei: '大吉',
         okotoba: 'きっといいことがあるでしょう'
      }
   }
   res.status(200).send(data);
});