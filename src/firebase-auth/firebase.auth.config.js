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

export const createFirebaseUser = async (userAuth, ...additionalData) => {
    if(!userAuth) return;
    const { displayName, email, uid } = userAuth;
    const userRef =  firestore.doc(`users/${uid}`);
    const userSnapShot = await userRef.get();
    if(!userSnapShot.exists){
        try{
          const createdAt = new Date();
           await userRef.set({ 
                displayName, email, createdAt, uid, additionalData
            });
        } catch(err){
            console.log(`error occured while creating user`,err.message);
        } 
    }
    return userRef;
}
export const createShopItemsDocuments = async (collectionKey, collectionObject) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    collectionObject.forEach(collection => {
        const newRef = collectionRef.doc();
        batch.set(newRef, collection);
    });
    return await batch.commit()

    console.log(collectionRef, typeof collectionObject)
}

export default firebase;