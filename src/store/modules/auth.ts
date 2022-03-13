import { router } from "../../routes";
import { login } from "../../api/auth";

const state = {
  email: "",
};
  
const mutations = {
  addEmail(state, payload) {
    state.email = payload.email;
  }, 
  removeEmail(state) {
    state.email = "";
  },
};

const actions = {
  signUp(context, payload) {    
    context.commit('addEmail', payload);
    router.push('/coach-panel');  
  },
  signIn(context, payload) {
    context.commit('addEmail', payload);
    router.push('/coach-panel');
  },
  signOut(context) {
    context.commit('removeEmail');
  },
};

const getters = {
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