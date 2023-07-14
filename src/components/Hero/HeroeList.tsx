import { getHeroesBypublisher } from "../../helper/getHeroeByPublisher"
import {useMemo} from "react"
import Heroe from "./Heroe"


const HeroeList = ({publisher}:{publisher:string}) => {

    const heroes = useMemo(() =>  getHeroesBypublisher(publisher) , [publisher])
   
    

  return (
    
    <div className="row animate__animated  animate__fadeIn">
    {heroes.map(heroe => (

        <Heroe
        col="col-md-6 col-lg-4 col-xm-1"
        {...heroe}
        />

    ))}

    </div>
    
    
  )
}

export default HeroeList