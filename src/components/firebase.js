import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCpQroja1eEM0-nqsx8E3fVOKQMozYjO0M",
    authDomain: "discord-clone-48a20.firebaseapp.com",
    projectId: "discord-clone-48a20",
    storageBucket: "discord-clone-48a20.appspot.com",
    messagingSenderId: "95883203070",
    appId: "1:95883203070:web:f5035680b80151476e70af"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;