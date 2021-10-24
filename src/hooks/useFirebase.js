import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import fireBaseInit from "../firebase/firebase.initialize";

// initialize firebase
fireBaseInit();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // email
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    // password
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    // Registration btn
    const handleRegisterBtn = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Please use at least 6 character password');
            return;
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please use at least 1 uppercase alphabetical character');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                setError('Check email inbox and verify & Refresh your site to login automatically.');
                // // send verify email now
                verifyEmail();
                setUser(userCredential.user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }
    // sign in with email & password
    const handleManualLogin = () => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    // send email verify link

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            });
    }

    // sign in using google
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider);

    }
    // sign out 
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        });
    }
    // user management
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])

    return {
        handleGoogleSignIn, user, email, password, logOut, handleEmail, handlePassword, handleRegisterBtn, error, handleManualLogin, setError, auth
    }
}

export default useFirebase;