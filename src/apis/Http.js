import axios from "axios";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export function get(url, callback) {
  return axios
    .get(url, {
      headers: {},
    })
    .then((response) => response.data)
    .catch((error) => error);
}
