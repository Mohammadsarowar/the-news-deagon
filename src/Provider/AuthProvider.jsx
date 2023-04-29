import { createContext, useEffect, useState} from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase";
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
        setLoading(true)
    }
    const singInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
        setLoading(true)
    }
    const ProfileInfo = () =>{
         return updateProfile(auth)
    }
    const LogOut = () =>{
        return signOut(auth)
        setLoading(true)
    }
   useEffect(()=>{
     const unSubscribe =  onAuthStateChanged(auth, loggedUser =>{
        setUser(loggedUser)
          console.log(loggedUser);
          setLoading(false)
          return ()=>{
          return unSubscribe;
          }
       })
   },[])

    const AuthInfo = {
        user,
        createUser,
        singInUser,
        ProfileInfo,
        LogOut,
        loading
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;