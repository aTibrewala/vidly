import http from "./httpService";
import { apiURL } from ".//config.json";
const apiEndPoint = apiURL + "movies";
export function getMovies() {
  return http.get(apiEndPoint);
}

export function deleteMovies() {
  http.delete(apiEndPoint + "/" + movieId);
}

export function getMovies(movieId){
    return http.get(apiEndPoint + '/' + movieId)
}

export function deleteMovie(movieId){
    return http.delete(apiEndPoint + '/' + movieId)
}

export function saveMovie(movie){
    if(movie._id){
        const body = {...movie};
        delete body._id;
        return http.put(apiEndPoint + '/' + movie._id, body);
    }

    http.post(apiEndPoint, movie)
}
