import firebase from "firebase";

// Initialize Firebase
var config = {
   apiKey: "AIzaSyDChWD4m7lWnxDUVIKBx4ICe9aCF7auQnU",
   authDomain: "test-dgl-firebase.firebaseapp.com",
   databaseURL: "https://test-dgl-firebase.firebaseio.com",
   projectId: "test-dgl-firebase",
   storageBucket: "test-dgl-firebase.appspot.com",
   messagingSenderId: "611688612571"
};
firebase.initializeApp(config);

export default firebase;
