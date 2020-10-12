
import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCWDvQlL-AIOZPwlabp6HG6assr-kY8kso",
    authDomain: "react-komunikator.firebaseapp.com",
    databaseURL: "https://react-komunikator.firebaseio.com",
    projectId: "react-komunikator",
    storageBucket: "react-komunikator.appspot.com",
    messagingSenderId: "636583623063",
    appId: "1:636583623063:web:48ad9e567a69058babecd2",
    measurementId: "G-EWSQVLJ9KY"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export default db;
