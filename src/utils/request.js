import axios from 'axios'
import store from '@/store/store'
let token = store.state.token;
export function getHttp({ url, params, successFn, catchFn }) {
    let i = 0;
    let timer = setInterval(function () {
        if (i > 5) {
            clearInterval(timer);
        }
        token = store.state.token;
        if (token) {
            clearInterval(timer);
            axios.get(url, { params, headers: { 'Authorization': token } }).then((response) => {
                successFn && successFn(response.data);
            }).catch((response) => {
                catchFn && catchFn(response.data);
            })
        }
        i++;
    }, 500);
    // notification.error({
    //     message: 'Forbidden',
    //     description: '没有TOKEN!'
    // })

}
export function postHttp({ url, params, successFn, catchFn }) {
    axios.post(url, { params, headers: { 'Authorization': token } }).then((response) => {
        successFn && successFn(response.data);
    }).catch((response) => {
        catchFn && catchFn(response.data);
    })
}

export function postFormHttp({ url, params, successFn, catchFn, headers }) {
    axios.post(url, params, headers).then((response) => {
        successFn && successFn(response.data);
    }).catch((response) => {
        catchFn && catchFn(response.data);
    })
}
