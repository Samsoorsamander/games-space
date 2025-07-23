import { useQuery } from "@tanstack/react-query";
import genres from "../Data/genres";
import APIClient, { FetchResponse } from "../services/api-client";
import axios from "axios";
import ms from "ms";

const apiClient = new APIClient<Genre>("/genres");
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const useGenre = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24 hours,
  });
};

export default useGenre;
