import * as firebase from 'firebase';

require('@firebase/firestore')


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAxRx6iS9LjITyi4OoAsLqE9x6bYmS1Kl4",
    authDomain: "wily-c64cc.firebaseapp.com",
    projectId: "wily-c64cc",
    storageBucket: "wily-c64cc.appspot.com",
    messagingSenderId: "930759063873",
    appId: "1:930759063873:web:a5b415dd530dffa60ec9c0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
