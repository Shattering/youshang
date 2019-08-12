import  axios from 'axios';

const ajax = axios.create({
    baseURL: 'http://localhost:3004',
})
  
export const http = () => {
    return ajax.get('/bins/15plqp')
}
