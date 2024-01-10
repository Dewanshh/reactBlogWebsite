// cosnt userHook=useUser()

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react"


const useUser=()=>{
    const[user,setUser]=useState(null);
    const[isLoading,setLoading]=useState(true);
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(getAuth(),user=>{
            setUser(user);
            setLoading(false);
        });
        return unsubscribe;
    },[])
    return {user,isLoading};
}

export default useUser;
