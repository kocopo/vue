import {createStore} from 'vuex'
import mutations from './mutation.js'
import actions from './actions.js'
import getters from './getters'

export default createStore({
    state() {
        return {
            cart: { items: [], total: 0, qty: 0 },
            isLoggedIn: false
        };
    },
    mutations: mutations,
    actions: actions,
    getters: getters
});