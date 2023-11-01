export default {
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
    },
}