import {createStore} from 'vuex'

const store = createStore({
    state(){
        return {
            counter: 0
        };
    },
    mutations:{
        increment(state : any){
            state.counter++;
        },
        increase(state: any, payload: any){
            state.counter = state.counter + payload.value;
        }
    }
});

export default store;