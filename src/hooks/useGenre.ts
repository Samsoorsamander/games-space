import { useQuery } from "@tanstack/react-query";
import genres from "../Data/genres";
import APIClient from "../services/api-client";
import axios from "axios";
import { FetchResponse } from "./useData";
import apiClient from "../services/api-client";

// const apiClient = new APIClient<Genre[]>("/genres");
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const useGenre = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours,
    initialData: { count: genres.length, results: genres },
  });
};
// const useGenre = () => ({data:genres, isLoading:false, error:null})

export default useGenre;
