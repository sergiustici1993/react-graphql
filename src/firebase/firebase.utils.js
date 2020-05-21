import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAp1fgeAlpG7kC0KZI0QG9tUp-NDpsOqmQ",
  authDomain: "crwn-db-419cd.firebaseapp.com",
  databaseURL: "https://crwn-db-419cd.firebaseio.com",
  projectId: "crwn-db-419cd",
  storageBucket: "crwn-db-419cd.appspot.com",
  messagingSenderId: "151625963825",
  appId: "1:151625963825:web:2dceead0baac1166327810",
  measurementId: "G-NV29EN2C40"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
