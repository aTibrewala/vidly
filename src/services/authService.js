import http from "./httpService";
import { apiURL } from "../config.json";

const apiEndpoint = apiURL + "/movies";

export function login(email, password) {
  return http.post(apiEndpoint, { email, password });
}
