import firebase  from "firebase/compat/app"
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


export const config = {
    apiKey: "AIzaSyAnfwuMCPop0swMgEp7mW8hueWOQY3uuaA",
    authDomain: "training-ps.firebaseapp.com",
    projectId: "training-ps",
    storageBucket: "training-ps.appspot.com",
    messagingSenderId: "106540317193",
    appId: "1:106540317193:web:7b9d910bb087cc77c556d8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;