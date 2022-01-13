import { router } from "../../routes";

const state = {
  email: "",
};
  
const mutations = {
  ADD_EMAIL(state, payload) {
    state.email = payload;
  }, 
  REMOVE_EMAIL(state) {
    state.email = "";
  },
};

const actions = {
  signUp(context, payload) {
    context.commit('ADD_EMAIL', payload);
    router.push('/coach-panel');  
  },
  signIn(context, payload) {
    context.commit('ADD_EMAIL', payload);
    router.push('/coach-panel');
  },
  signOut(context) {
    context.commit('REMOVE_EMAIL');
  },
};

const getters = {
  getEmail() {
    return state.email
  },
  userIsLoggedIn: () => {
    return state.email !== "";
  },
};

const authModule = {
  state,
  mutations,
  actions,
  getters
}

export default authModule