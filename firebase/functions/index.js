// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// 動作確認用 hello world
exports.hello = require('./modules/hello').hello;
// onCallテスト用
exports.callTest = require('./modules/callTest').callTest;
