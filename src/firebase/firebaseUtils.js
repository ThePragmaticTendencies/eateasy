import firebase from 'firebase'

export const firebaseUtils = {
  onAuth: (signedIn, signedOut) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        signedIn(user)
      } else {
        signedOut && signedOut()
      }
    })
  },
  signIn: (email, password) => {
    return firebase
      .auth().signInWithEmailAndPassword(email, password)
  },
  signOut: () => {
    firebase.auth().signOut()
  }
}
