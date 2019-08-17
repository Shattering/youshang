import  axios from 'axios';

export const http = (url, method, data ) => {
    return  axios({
        url,
        method: method||'GET',
        data: data||{},
        headers:{ 'content-type': 'application/x-www-form-urlencoded' }
        })
}
