
import { Navbar } from '../ui/NavBar'
import Marvel from '../marvel/Marvel'
import { Route, Routes } from 'react-router-dom';
import DcScreen from '../dc/DcScreen'
import SearhScreen from '../search/SearhScreen'
import HeroeCard from '../Hero/HeroeCard';


export const Dasboar = () => {
  return (
    <>
    
    <Navbar/>
    <div className='container'>
    <Routes>
    <Route path='/' element={<Marvel/>} />
    <Route path='/marvel' element={<Marvel/>} />
    <Route path='/dc' element={<DcScreen/>}/>
    <Route path='/search' element={<SearhScreen/>}/>
    <Route path="/heroe/:heroe" element={<HeroeCard/>}/>
    </Routes>
    </div>
    
    </>
  )
}
