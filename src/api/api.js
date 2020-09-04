import { getHttp, postHttp, postFormHttp } from '@/utils/request'

const userApi = {
    Domain: 'http://www.emcshare.com',
    Login: '/doLogin',
    machineList: '/data/currentData'
}

export function login({ params, successFn, catchFn }) {
    return postFormHttp({
        url: userApi.Domain + userApi.Login,
        params,
        successFn,
        catchFn,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
}
export function getMachine({ params, successFn, catchFn }) {
    return getHttp({
        url: userApi.Domain + userApi.machineList,
        params: { companyId: 1, today: 0, hasState: -1 },
        successFn,
        catchFn
    })
}