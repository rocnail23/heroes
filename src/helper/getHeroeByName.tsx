import { heroes } from "../data/heroes"




export const getHeroeByName = (name:string = "") => {

    if(!name){
        return
    }


       
    return heroes.filter(heroe => heroe.superhero.toLowerCase().includes(name))
}