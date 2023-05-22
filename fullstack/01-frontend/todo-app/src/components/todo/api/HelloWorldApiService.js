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

// first an options request is sent and only after that the real request in sent
// so we would need to enable access to options requests for everybody
export const retrieveHelloWorldPathVariable
    = (username, token) => apiClient.get(`/hello-world/path-variable/${username}`,{
        headers: {
            Authorization: token
            // we can't hard code this.
            // we should get thie header when login process is successfully done
            // and use it for subsequent rest api calls
        }
    })

export const executeBasicAuthenticationService
    = (token) => apiClient.get(`/basicauth`,{
    headers: {
        Authorization: token
    }
})
