import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id:number
    name:string
}
interface FetchGenreResponse {
    count:number
    results:Genre[]
}

const useGenre = () => {
    const [genres, setGenre] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        const controler = new AbortController();
        setLoading(true);
      apiClient
        .get<FetchGenreResponse>("/genres", {signal: controler.signal})
        .then((res) => {
          setGenre(res.data.results)
          setLoading(false)
        })
        .catch((err) => {
            if(err instanceof CanceledError)  return;
            setError(err.message)
            setLoading(false)
        });

        return () => controler.abort();
    },[]);
    return  {genres, error, isLoading}
}

export default useGenre;