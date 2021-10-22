import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import fireBaseInit from "../firebase/firebase.initialize";

// initialize firebase
fireBaseInit();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // sign in using google
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });

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
        handleGoogleSignIn, user, logOut
    }
}

export default useFirebase;