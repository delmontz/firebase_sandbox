const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
   // ここにfirebaseのapi情報をコピペします。
   apiKey: "AIzaSyAayBbYQL63K3W6pq0sX6gKXhZXkybn0co",
   authDomain: "signkanji.firebaseapp.com",
   databaseURL: "https://signkanji.firebaseio.com",
   projectId: "signkanji",
   storageBucket: "signkanji.appspot.com",
   messagingSenderId: "380599318472"
});
const DB = firebase.firestore();
DB.settings({ timestampsInSnapshots: true });

DB.collection('devices').doc('system').get().then((snapshot) => {
   console.log(snapshot.data().activity);
});



// /* param: ymd */
// exports.getEventData = functions.region('asia-northeast1').https.onRequest((req, res) => {
//    cors(req, res, async () => {
//       let ym = req.query.ymd.substr(0, 6);
//       let day = Number(req.query.ymd.substr(6, 2));
//       let event_data_tbl = [];
//       let ref = DB.collection('EventData').doc('conpass').collection(ym).where('date', '==', day);
//       await ref.get().then(snapshot => {
//          snapshot.forEach(event_data => {
//             event_data_tbl.push(event_data.data());
//          });
//       });
//       res.status(200).send(event_data_tbl);
//    });
// });