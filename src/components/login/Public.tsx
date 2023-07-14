import React from "react"
import { useContext } from 'react';
import { AuthContext } from "../../auth/authContex";

import { Navigate, Route, Routes } from 'react-router-dom';

type props = {
    children: React.ReactNode
}

export const Public = ({children}:props) => {



    const path = localStorage.getItem("location")  || "/"
    const { user} = useContext(AuthContext)
  
    if(user.login == false){

        return <> 
            <Routes>
                <Route path="/login" element={children}/>
                </Routes>   
               </>
    }else{
        
        return <Navigate to={path}/>
        
    }


}
