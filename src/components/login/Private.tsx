
import { useContext } from 'react';
import { AuthContext } from '../../auth/authContex';
import { Navigate, Outlet, useLocation } from 'react-router-dom';



const Private = () => {

    const location = useLocation()
   
    localStorage.setItem("location",location.pathname + location.search)
    console.log("hola")
    const {user} = useContext(AuthContext)
    
    

    if(user.login == false){
        return <Navigate to="/auth/login"/>
    }else {
        return <Outlet/>
    }
    
  
}

export default Private