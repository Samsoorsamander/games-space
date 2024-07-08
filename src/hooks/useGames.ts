import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platforms {
    id:number,
     name:string, 
    slug:string
}
export  interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platforms}[]
  }
  

interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
        const controler = new AbortController();
      apiClient
        .get<FetchGamesResponse>("/games", {signal: controler.signal})
        .then((res) => setGames(res.data.results))
        .catch((err) => {
            if(err instanceof CanceledError)  return;
            setError(err.message)
        });

        return () => controler.abort();
    },[]);
    return {games, error, setGames,setError}
   

}

export default useGames;