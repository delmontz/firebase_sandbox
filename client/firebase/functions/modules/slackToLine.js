const functions = require('firebase-functions');
const lineApi = require('line-api');

const notify = new lineApi.Notify({
   token: 'Vv24dSNV7Zqq40jwBYCZStrOP7L2Vuw04qOi58oVGUe'
});

exports.slackToLine = functions.region('asia-northeast1').https.onRequest(async (req, res) => {
   console.log(req.body);
   await notify.send({
      message: 'Test message',
      sticker: { packageId: 4, id: 271 }
   });
   res.status(200).send('ok');
});