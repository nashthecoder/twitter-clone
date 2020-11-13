import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZeJQQv2CP0wMeFnn5ZnRCccne4CLRF6c",
  authDomain: "twitterclone-321c2.firebaseapp.com",
  databaseURL: "https://twitterclone-321c2.firebaseio.com",
  projectId: "twitterclone-321c2",
  storageBucket: "twitterclone-321c2.appspot.com",
  messagingSenderId: "72768055777",
  appId: "1:72768055777:web:c670bd3d303ff54d0c4aa0",
  measurementId: "G-GVD87Z9TTT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
