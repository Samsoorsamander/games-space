import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6e9e1dcad000475490d088908fb322b1",
  },
});

// class APIClient<T> {
//   endpoint: string;

//   constructor(endpoint: string) {
//     this.endpoint = endpoint;
//   }

//   getAll = () => {
//     return axiosInstance.get<T>(this.endpoint).then((res) => res.data);
//   };

//   post = (data: T) => {
//     return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
//   };
// }

// export default APIClient;
