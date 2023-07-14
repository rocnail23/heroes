
import { useContext } from 'react';
import { AuthContext } from "../../auth/authContex";


const Login = () => {

  

  const {login} = useContext(AuthContext)


 
  
  return (
    <>
    <h1>Login</h1>
    <br />

    <button onClick={() => {
      
     
     login()

     
     
}
    }>login to Home</button>
    
    </>


  )
}

export default Login