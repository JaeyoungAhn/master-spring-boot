import axios from 'axios'

// export function retrieveHelloWorldBean() {
//     return axios.get('http://localhost:8080/hello-world-bean')
// }
const apiClient = axios.create(
    {
        baseURL:'http://localhost:8080'
    }
)
export const retrieveHelloWorldBean
    = () => apiClient.get('/hello-world-bean')


// CORS policy: No 'Access-Control-Allow-Origin'
// header is present on the requested resource.

// response to preflight request doesn't pass access control check:
// No 'Access-Control-Allow-Origin' header is present on the requested resource. => Authorization
export const retrieveHelloWorldPathVariable
    = (username) => apiClient.get(`/hello-world/path-variable/${username}`,{
        headers: {
            Authorization: 'Basic dXNlcjp1c2Vy'
        }
    })
