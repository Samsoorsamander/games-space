import { useQuery } from "@tanstack/react-query";
import genres from "../Data/genres";
import APIClient, { FetchResponse } from "../services/api-client";
import axios from "axios";

const apiClient = new APIClient<Genre[]>("/genres");
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const useGenre = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours,
    // initialData: { count: genres.length, results: genres },
  });
};
// const useGenre = () => ({data:genres, isLoading:false, error:null})

export default useGenre;
