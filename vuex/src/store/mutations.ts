export default {
    // eslint-disable-next-line
    login(state: any, payload: string){
        if(!state.loggedIn){
            state.loggedIn = true;
            state.loggedName = payload;
            console.log("You are now logged in");
        }else{
            console.warn("You are already logged in");
        }
    },
    // eslint-disable-next-line
    logout(state:any){
        if(state.loggedIn){
            state.loggedIn = false;
            state.loggedName = "";
            console.log("You are now logged out");
        }else{
            console.warn("You are already logged out");
        }
    }
    
}