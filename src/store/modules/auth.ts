import { router } from "../../routes";

const state = {
  email: "",  
  userIsLoggedIn: false,
};
  
const mutations = {
  ADD_EMAIL(state, payload) {
    state.email = payload;
  }, 
  CHANGE_LOG(state) {
    state.userIsLoggedIn = true;
  },
  REMOVE_EMAIL(state) {
    state.email = "";
  },
};

const actions = {
  signUp(context, payload) {
    context.commit('ADD_EMAIL', payload);
    context.commit('CHANGE_LOG');
    router.push('/coach-panel');  
  },
  signIn(context, payload) {
    context.commit('ADD_EMAIL', payload);
    context.commit('CHANGE_LOG');
    router.push('/coach-panel');
  },
  signOut(context) {
    context.commit('REMOVE_EMAIL');
  },
};

const getters = {
  getEmail(state) {
    return state.email;
  }, 
  getLog(state) {
    return state.userIsLoggedIn;
  },
};

const authModule = {
  state,
  mutations,
  actions,
  getters
}

export default authModule