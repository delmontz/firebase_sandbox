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
// ToDoリスト取得用
exports.getData = require('./modules/getData').getData;
// ToDoリスト更新用
exports.setData = require('./modules/setData').setData;
// rest api 実験用
exports.rest = require('./modules/rest').rest;
