import { createContext} from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase";
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
 const user = {displayName:'Muri khan'}
    const AuthInfo = {
        user

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;