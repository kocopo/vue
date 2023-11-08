export default{
    // eslint-disable-next-line
    parseArray(context: any, payload: string[]): void{
        context.commit('parseArray', payload);
    },
    // eslint-disable-next-line
    clearCategories(context: any): void{
        context.commit('clearCategories');
    }
}