import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api"
})

const callApi = (endpoint) => {
  return {
    getItems() {
      return api.get(endpoint)
        .then(res => {
          return res.data
        })
        .catch(err => console.log(err))
    }
  }
}

export default callApi;