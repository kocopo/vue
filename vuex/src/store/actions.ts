export default {
    // eslint-disable-next-line
    login(context: any, payload: string){
        context.commit('login', payload);
    },
    // eslint-disable-next-line
    logout(context: any){
        context.commit('logout');
    }
}