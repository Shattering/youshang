import  axios from 'axios';

const ajax = axios.create({
    baseURL: 'https://api.myjson.com',
})
  
export const http = () => {
    return ajax.get('/bins/15plqp')
}