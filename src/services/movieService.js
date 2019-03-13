import http from "./httpService";
import { apiURL } from ".//config.json";
const apiEndPoint = apiURL + "movies";
export function getMovies() {
  return http.get(apiEndPoint);
}

export function deleteMovies() {
  http.delete(apiEndPoint + "/" + movieId);
}
