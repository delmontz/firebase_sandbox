const functions = require('firebase-functions');
const db = require('../firebase').db;

exports.callTest = functions.region('asia-northeast1').https.onCall(async (data, context) => {
   if(context.auth.uid){
      const docRef = db.collection('user').doc(context.auth.uid);
      const  documentSnapshot = await docRef.get();
      const record = documentSnapshot.data();

      return {
         data: record
      }
   }
});