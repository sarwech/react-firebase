import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA1twHgYPmNhSxao05qxh9YhQs_DHMRt8k",
  authDomain: "react-firebase-5b717.firebaseapp.com",
  databaseURL: "https://react-firebase-5b717.firebaseio.com",
  projectId: "react-firebase-5b717",
  storageBucket: "react-firebase-5b717.appspot.com",
  messagingSenderId: "810451028958",
  appId: "1:810451028958:web:3d87aaf5cc4a25d2"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // *** Authentication API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  
  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

}

export default Firebase;