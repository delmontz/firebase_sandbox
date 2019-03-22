const functions = require('firebase-functions');

exports.hello = functions.https.onRequest((req, res) => {
   response.send('Hello World !!');
});