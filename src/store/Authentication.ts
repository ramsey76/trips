import {GetterTree, MutationTree, ActionTree, Module, ActionContext } from "vuex";
import {AuthenticationState, Credentials} from "@/types";

const state : AuthenticationState = {
    isLoggedIn: false,
}

export const getters: GetterTree<AuthenticationState, any> = {
    isUserLoggedIn: (state) => state.isLoggedIn
}

export const mutations: MutationTree<AuthenticationState> = {
    changeAuthentication(AuthenticationState, loginState: boolean) {
        AuthenticationState.isLoggedIn = loginState;
    }
}

export const actions: ActionTree<AuthenticationState, any> = {
    AuthenticationUser({commit}: ActionContext<AuthenticationState, any>, payload: Credentials) {
        console.log(`username: ${payload.userName}, password: ${payload.passWord}`);
        commit('changeAuthentication', true);
    }
}

export const authenticationStore: Module<any,any> = {
    state,
    getters,
    mutations,
    actions,
    namespaced: true,
}