import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // setup firebase auth listner
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user); // user is logged in
            } else {
                setUser(null); // user is logged out
            }
        });

        // clean up on unmount
        return () => unsub();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};
