import { heroes } from '../data/heroes';



const getHeroeById = (id?:string) => {

    const hero = heroes.find(heroe => heroe.id == id)

    return hero
}

export default getHeroeById