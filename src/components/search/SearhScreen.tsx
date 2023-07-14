import {useMemo, useState} from "react"
import { getHeroeByName } from "../../helper/getHeroeByName";
import Heroe from "../Hero/Heroe";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string"

const SearhScreen = () => {

  

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {

    setSearchtext(e.target.value)
    
  }

  const {search} = useLocation()
  const {q:busqueda} = queryString.parse(search)
 
 const navigate = useNavigate()

  const q = busqueda?.toString()
  const [searchText, setSearchtext] = useState(q)
  const handleSubmit = (e:React.FormEvent<HTMLElement>) => {

    e.preventDefault()
    console.log(searchText)
    setSearchtext("")
    navigate(`?q=${searchText}`)
  }


 
  const heroes = useMemo(() => getHeroeByName(q), [q] ) 

  return (
     <>
     <h1>Busqueda</h1>
     <hr />

     <div className="row">

      <div className="col-5">
        <h4>Buscar</h4>
        <hr />

        <form onSubmit={
          handleSubmit
        }>
          <input 
          type="text"
          placeholder="Buscar un Heroe"
          className="form-control"
          name="searchText"
          autoComplete="off"
          onChange={handleChange }
          value={searchText} />

          <button
          className="btn btn-outline-primary mt-1">
            Buscar
          </button>
        </form>

      </div>
      <div className="col-7">
          <h3>Encontrados</h3>
          <hr />
          <ul className="row">
          {heroes?.map(heroe => (
           <Heroe
           key={heroe.id}
           {...heroe}
           col="col-12n col-md-12 col-lg-6"
           />
          ))}
          
          </ul>

      </div>

     </div>
     </>
  )
}

export default SearhScreen