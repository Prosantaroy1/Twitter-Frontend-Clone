import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { updateProfile } from "firebase/auth/cordova";

export const AuthContent= createContext(null);
// 
const auth= getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    // 
    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(false);

    // create user
    const signupUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // signIn
    const signinUser=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    // Name
    const updateName=(name)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }
    // logout
    const logoutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }
    // user change
    useEffect(()=>{
        const unsubscibe= onAuthStateChanged(auth, currentUser=>{
             setUser(currentUser)   
             setLoading(false)
        })
        return ()=> unsubscibe();
    },[])

    // 
    const authInfo={
        user, 
        loading,
        logoutUser,
        signinUser,
        signupUser,
        updateName
    }
    return (
        <AuthContent.Provider value={authInfo}>
             {children}
        </AuthContent.Provider>
    );
};

export default AuthProvider;