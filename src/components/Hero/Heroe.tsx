import { Link } from "react-router-dom"


type props = {
  alter_ego: string,
  characters: string,
  first_appearance: string,
  id: string,
  publisher: string,
  superhero: string,
  col:string
}


const Heroe = ({
  alter_ego,characters,first_appearance,id,publisher,superhero,col
}:props) => {

  const imageHero = `/assets/${id}.jpg`

  return (
    <div className={col}>
      <div className="card mb-3" style={{maxWidth: "540px"}} >
  <div className="row g-0">
    <div className="col-md-4">
      <img style={{height: "100%"}} src={imageHero} className="img-fluid" alt={id}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{superhero}</h5>
        <p className="card-text">{alter_ego}</p>
        {(characters != alter_ego) && <p className="text-muted" style={{fontSize: "12px"}}>{characters}</p>}
        <p className="card-text"><small>{first_appearance}</small></p>
        <Link to={`/heroe/${id}`}>mas...</Link>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Heroe