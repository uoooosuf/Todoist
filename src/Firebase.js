import firebase from 'firebase/App';
import 'firebase/firestore';



const firebaseConfig = firebase.initializeApp({

    apiKey: "AIzaSyDJN4fmnh9l3u2Rw29YcXNqJ6ckRbmvwIk",
    authDomain: "todoist-prac.firebaseapp.com",
    databaseURL: "https://todoist-prac.firebaseio.com",
    projectId: "todoist-prac",
    storageBucket: "todoist-prac.appspot.com",
    messagingSenderId: "277716884021",
    appId: "1:277716884021:web:9b0500b2bc74fcef5e6f7c"

});

export { firebaseConfig as firebase };