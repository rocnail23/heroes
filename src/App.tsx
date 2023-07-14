
import { AuthContextProvider } from './auth/authContex';
import { Dasboar } from './components/dasboard/Dasboar';

import Login from './components/login/Login';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Private from './components/login/Private';
import { Public } from './components/login/Public';



function App() {

  
  
 

  return (
    <AuthContextProvider>
  
    <Router>
    <Routes>

    <Route path='/auth/*' element={<Public>
      <Login/>
    </Public>}/>
    

    <Route  element={<Private/>} >
        <Route path="/*" element={<Dasboar/>} />
    </Route>

    
     
    
    

     </Routes>
    </Router>
    </AuthContextProvider>
    
    
  )
}

export default App
