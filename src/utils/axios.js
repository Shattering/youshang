import  axios from 'axios';

export const http = (arguments) => {
    return axios.create({
        baseURL: 'http://localhost:3004',
    }).request({
        url:arguments.url,
    })
}
