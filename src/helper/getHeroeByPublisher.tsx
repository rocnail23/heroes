import { Heroe, heroes } from "../data/heroes";



export const getHeroesBypublisher = (publisher: string): Heroe[] => {
    const validPublisher: [string, string] = ["DC Comics", "Marvel Comics"];
  
    if (!validPublisher.includes(publisher)) {
      throw new Error(`${publisher} no encontrado`);
    }
  
    return heroes.filter((heroe) => heroe.publisher === publisher);
  };
  