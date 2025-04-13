import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, onAuthStateChanged, signOut  } from "firebase/auth";

import { auth } from "./firebase";

//sign up 
export const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

// login 
export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

// guest login 
export const gustLogin = () => signInAnonymously(auth);

//logout
export const logout = () => signOut(auth);

//listen to auth changes
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback)