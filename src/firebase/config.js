import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyA8nFhPh4rgXbqctmTZjUhuHEwyQPbaG7E',
  authDomain: 'my-firegram-83f20.firebaseapp.com',
  projectId: 'my-firegram-83f20',
  storageBucket: 'my-firegram-83f20.appspot.com',
  messagingSenderId: '965713562840',
  appId: '1:965713562840:web:291fb9cf133c0051841bad',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
