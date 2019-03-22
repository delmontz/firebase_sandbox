const functions = require('firebase-functions');

exports.hello = functions.region('asia-northeast1').https.onRequest((req, res) => {
   response.send('Hello World !!');
});