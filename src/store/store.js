import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
let token = sessionStorage.getItem('token');
export default new Vuex.Store({
    state: {
        menus: [
            {
                menuId: '0',
                name: '设备列表',
                icon: 'ios-navigate',
                menuUrl: '/machineList'
            },
            {
                menuId: '1',
                name: '数据对比',
                icon: 'ios-navigate',
                subMenus: [
                    {
                        menuId: '1-1',
                        name: '分析页',
                        menuUrl: '/analysis'
                    },
                    {
                        menuId: '1-2',
                        name: '工作台',
                        menuUrl: '/work'
                    }
                ]
            },
            {
                menuId: '2',
                name: '数据对比1',
                icon: 'ios-keypad',
                subMenus: [
                    {
                        menuId: '2-1',
                        name: '分析页',
                        menuUrl: '/analysis'
                    },
                    {
                        menuId: '2-2',
                        name: '工作台',
                        menuUrl: '/work'
                    }
                ]
            },
            {
                menuId: '3',
                name: '数据对比2',
                icon: 'ios-analytics',
                subMenus: [
                    {
                        menuId: '3-1',
                        name: '分析页',
                        menuUrl: '/analysis'
                    },
                    {
                        menuId: '3-2',
                        name: '工作台',
                        menuUrl: '/work'
                    }
                ]
            }
        ],
        loginName: '',
        loginId: '',
        token: token,
        userType: ''
    },
    actions: {
    },
    mutations: {
        updateLogin(state, data) {
            state.loginName = data.name;
            state.loginId = data.id;
            state.token = data.token;
            sessionStorage.setItem('name', data.name);
            sessionStorage.setItem('id', data.id);
            sessionStorage.setItem('token', data.token);
        },
        updateUserType(state, data) {
            state.userType = data;
            sessionStorage.setItem('userType', data);
        }
    }
})