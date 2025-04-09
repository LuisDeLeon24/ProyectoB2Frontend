import { useState} from 'react';
import {logout as logoutHandler} from "./useLogOut";

const getUserDetails = () => {
    const useDetails = localStorage.getItem('user');

    if(useDetails){
        return JSON.parse(useDetails);
    }else{
         return null;   
    }
}

export const useUserDetails = () =>{
    const [useDetails, setUseDetails] = useState(getUserDetails())

    const logout = () => {
        logoutHandler()
    }

    return{
        isLogged: Boolean(useDetails),
        username: useDetails?.username? useDetails.username: 'Guest',
        logout
    }
}