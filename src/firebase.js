import firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9vwHzu6Lp2MaSjd86ekoVjGV7GysKNQk",
  authDomain: "udemy-api-a801f.firebaseapp.com",
  databaseURL: "https://udemy-api-a801f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "udemy-api-a801f",
  storageBucket: "udemy-api-a801f.appspot.com",
  messagingSenderId: "253333316640",
  appId: "1:253333316640:web:80dcf6177a208c17728845"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

export { auth, firebase }