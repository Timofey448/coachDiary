import { router } from "../../routes";

const state = {
  email: "",  
  IsUserLoggedIn: false,
};
  
const mutations = {
  ADD_EMAIL(state, payload) {
    state.email = payload;
  }, 
  CHANGE_LOG(state) {
    state.IsUserLoggedIn = true;
  },
  REMOVE_EMAIL(state) {
    state.email = "";
    state.IsUserLoggedIn = false;
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
  isLoggedIn(context) {
    if (state.email != "") {
      context.commit('CHANGE_LOG');
    } 
  },
};

const getters = {
  getEmail(state) {
    return state.email;
  }, 
  IsUserLoggedIn(state) {
    return state.IsUserLoggedIn;
  },
};

const dataModule = {
  state,
  mutations,
  actions,
  getters
}

export default dataModule