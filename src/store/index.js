import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userName: 'Vu Xuan Thanh',
        age: 10
    },
    getters: {
        getUserName: state=> {
            return "UserName: "+state.userName
        },
        getAge: state => {
            return state.age + "year old";
        }
    },
    mutations: {
        changUserName(state, newUserName) {
            console.log(state);
            state.userName = newUserName
        }
    },
    actions: {
        handleChangeUserName(context, newUserName) {
            context.commit('changUserName', newUserName);
        }
    }
});