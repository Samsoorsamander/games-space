

import genres from "../Data/genres"

export interface Genre {
    id:number
    name:string
    image_background:string
}


const useGenre = () => ({data:genres, isLoading:false, error:null})

export default useGenre;