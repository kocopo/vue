export default {
    // eslint-disable-next-line
    increment(state: any) {
        state.counter++;
    },
    // eslint-disable-next-line
    increase(state: any, payload: any) {
        state.counter = state.counter + payload.value;
    },
}