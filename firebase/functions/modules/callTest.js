const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.callTest = functions.region('asia-northeast1').https.onCall((data, context) => {
   return {
      data1: 'test1',
      data2: 'test2',
      data3: 'test3'
   }
});

function isLogin(context){

}