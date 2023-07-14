import { Navigate, useNavigate, useParams } from "react-router-dom"
import getHeroeById from "../../helper/getHeroeById"


const HeroeCard = () => {

  const {heroe:id}  = useParams()

  const heroe = getHeroeById(id)

  if(!heroe){
    return <Navigate to="/"/>
  }

  const navigate = useNavigate()

  const heroImage = `/assets/${heroe.id}.jpg`

  const handleClick = () => {

    navigate("/")

  }

  return (
    <div className="row mt-5">
      <div className="col-4">
          <img src={heroImage} alt={heroe.superhero} className="img-thumbnail animate__animated animate__fadeInLeft"/>
      </div> 
      
      <div className="col-8">
        <h3>{heroe.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego:</b> {heroe.alter_ego}  </li>
          <li className="list-group-item"> <b>Publisher:</b> {heroe.publisher}  </li>
          <li className="list-group-item"> <b>First Appareance:</b> {heroe.first_appearance}  </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p >{heroe.characters}</p>
        <button 
        className="btn btn-outline-info"
        onClick={handleClick}>
        regresar
        </button>
      </div>

    </div>
  )
}

export default HeroeCard