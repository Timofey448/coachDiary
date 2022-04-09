import { router } from "../../routes";
import {default as createUser, login} from '../../api/auth';
// import login from "../../api/auth";
// import createUser from "../../api/auth";

const state = {
  name: "",
  email: "",
  password: "",
};

const mutations = {
  setupUser(state, payload) {
    state.email = payload.email;
    state.password = payload.password;   
    state.name = payload.name;
  },
  cleanupUser(state) {
    state.email = "";
    state.password = "";
    state.name = "";
    localStorage.removeItem("currentUser");
  },
};

const actions = {
  signUp(context, payload) {
    createUser(payload);
    console.log(payload);
    if (payload.role == "Coach") {
      context.commit('setupUser', payload);
      router.push('/coach-panel');

    } else if (payload.role == "Mentee") {             
      context.commit('setupUser', payload);
      router.push('/mentee-panel');
    }   
  },
  signIn(context, payload) {
    payload.name = login(payload).firstName;  
    if (login(payload).role == "Coach") {
      context.commit('setupUser', payload);
      router.push('/coach-panel');

    } else if (login(payload).role == "Mentee") {             
      context.commit('setupUser', payload);
      router.push('/mentee-panel');
    }
  },
  signOut(context) {
    context.commit('cleanupUser');
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
