import axios from 'axios'

export function register(payload) {
  axios.post('http://localhost:8000/buyers/', {
    username: payload.username,
    password: payload.password,
    first_name: payload.firstname,
    last_name: payload.lastname,
    address: payload.address
  })
  .then((response) => {
    console.log(response)
  })
  .catch((response) => {
    console.error(response) 
  })
}