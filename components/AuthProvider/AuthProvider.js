import { createContext } from "react";
import app from "../Firebase/Firebase";
import { createUserWithEmailAndPassword, getAuth,sendPasswordResetEmail,signInWithEmailAndPassword } from 'firebase/auth';
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password)
    }

    const forgetPassword = (email) =>{
        return sendPasswordResetEmail(auth, email)
    }
    const authInfo = {
        createUser,
        login,
        forgetPassword
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;