const functions = require('firebase-functions');
const db = require('../firebase').db;

exports.getData = functions.region('asia-northeast1').https.onCall(async (data, context) => {
   if(context.auth.uid){
      const docRef = db.collection('user').doc(context.auth.uid).collection('todolist');
      const snapshot = await docRef.get();
      const record = snapshot.docs[0].data();
      console.log(snapshot.docs);

      return {
         data: record
      }
   }
});