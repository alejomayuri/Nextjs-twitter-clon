import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBpezRq7FHV5muaaWboGeLn90n_HqbXHO0",
    authDomain: "twitter-clon-3eb67.firebaseapp.com",
    projectId: "twitter-clon-3eb67",
    storageBucket: "twitter-clon-3eb67.appspot.com",
    messagingSenderId: "779654879200",
    appId: "1:779654879200:web:ff8819b5a7d73e74debd85"
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
    const { displayName, email, photoURL } = user

    return {
        avatar: photoURL,
        username: displayName,
        email
    }
}

export const onAuthStateChanged = (onChange) => {
    return firebase
        .auth()
        .onAuthStateChanged(user => {
            const normalizedUser = mapUserFromFirebaseAuthToUser(user)
            onChange(normalizedUser)
        })
}

export const loginWithGithHub = () => {
    const githubProvider = new firebase.auth.GithubAuthProvider()
    return firebase
        .auth()
        .signInWithPopup(githubProvider)
}