import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut 
} from "firebase/auth";
import { updateProfile } from "firebase/auth/cordova";

export const AuthContent = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Initially set loading to true

    // Create user
    const signupUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign in
    const signinUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Update name
    const updateName = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        });
    };

    // Logout
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Handle user authentication state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false); // Set loading to false after the user state is determined
        });

        // Cleanup subscription on component unmount
        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        logoutUser,
        signinUser,
        signupUser,
        updateName,
    };

    return (
        <AuthContent.Provider value={authInfo}>
            {loading ? (
                // Optionally display a loading component while loading is true
                ""
            ) : (
                children
            )}
        </AuthContent.Provider>
    );
};

export default AuthProvider;
