import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUIYsEEUtiXJWJ8cdH93lh_3YhNjbQXYs",
    authDomain: "slack-3842a.firebaseapp.com",
    projectId: "slack-3842a",
    storageBucket: "slack-3842a.appspot.com",
    messagingSenderId: "125293716670",
    appId: "1:125293716670:web:f35f19b1311512a2ffeaef",
    measurementId: "G-L1SMLRK5M1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  
  export { auth, provider }
  export default db