import axios from 'axios'
import store from '@/store/store'
let token = store.state.token, timer
export function getHttp({ url, params, successFn, catchFn }) {
    for (let i = 0; i < 5; i++) {
        timer = setTimeout(function () {
            token = store.state.token;
            if (token) {
                console.log(token)
                console.log(url, params, { 'Authorization': token })
                axios.get(url, params, { 'Authorization': token }).then((response) => {
                    successFn && successFn(response.data);
                }).catch((response) => {
                    catchFn && catchFn(response.data);
                })
                clearTimeout(timer);
                return;
            }
        }, 500);
    }
    notification.error({
        message: 'Forbidden',
        description: '没有TOKEN!'
    })

}
export function postHttp({ url, params, successFn, catchFn }) {
    axios.post(url, params, { 'Authorization': token }).then((response) => {
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
