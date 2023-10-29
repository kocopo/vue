import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            counter: 0
        };
    },
    mutations: {
        // eslint-disable-next-line
        increment(state: any) {
            state.counter++;

        },
        // eslint-disable-next-line
        increase(state: any, payload: any) {
            state.counter = state.counter + payload.value;
        }
    },
    getters: {
        // eslint-disable-next-line
        finalCounter(state: any) {
            return state.counter * 3;
        },
        // eslint-disable-next-line
        normalizedCounter(_, getters: any) {
            const finalCounter = getters.finalCounter;
            if (finalCounter < 0) return 0;
            if (finalCounter > 100) return 100;
            return finalCounter;
        }
    },
    actions: {
        // eslint-disable-next-line
        increment(context: any) {
            setTimeout(
                function () {
                    context.commit('increment');
                },
                2000);
        },
        // eslint-disable-next-line
        increase(context : any, payload : any){
            context.commit('increase', payload);
        }
    }
});

export default store;