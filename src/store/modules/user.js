import Cookies from 'js-cookie';
const user = {
    state: {
        userName: '',
        Uid: null,
        mesCount: 3,
        token: ''
    },
    getters: {},
    mutations: {
        saveUser: (state, data) => {
            localStorage.username = data;
            state.userName = data
        },
        saveToken: (state, data) => {
            localStorage.token = data;
            state.token = data
        },
        saveUid: (state, data) => {
            localStorage.Uid = data;
            state.Uid = data
        },
        logoOut: state => {
            Cookies.remove("user");
            Cookies.remove("passwd");
            localStorage.removeItem("token");
            state.token = '';
            state.userName = '';
        },
    },
    actions: {}
}


export default user;
