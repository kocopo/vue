import { createStore } from "vuex";
import Category from "@/components/model/Category";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const Store = createStore({
    state(){
        return{
            categories: [] as Category[]
        }
    },
    getters: getters,
    mutations: mutations,
    actions: actions
});

export default Store;