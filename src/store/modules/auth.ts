import { router } from "../../routes";
import { login } from "../../api/auth";

const state = {
  email: "",
  password: "",
};
  
const mutations = {
  addEmail(state, payload) {
    state.email = payload.email;
    state.password = payload.password;
  },
  runLogin(payload) {
    login(payload);
  },
  removeEmail(state) {
    state.email = "";
    state.password = "";
  },
};

const actions = {
  signUp(context, payload) {    
    context.commit('addEmail', payload);   
    router.push('/coach-panel');  
  },
  signIn(context, payload) {    
    context.commit('runLogin', payload);
    
    if (login(payload).role == "coach") {
      context.commit('addEmail', payload);
      router.push('/coach-panel');
    } else if (login(payload).role == "student") {
      context.commit('addEmail', payload);
      router.push('/student-panel');
    } 
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