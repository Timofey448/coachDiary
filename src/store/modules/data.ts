const state = {
  email: "",
  password: "",
  userIsLoggedIn: false,
};
  
const mutations = {
  ADD_EMAIL(state, payload) {
    state.email = payload;
  },
  ADD_PASSWORD(state, payload) {
    state.password = payload;
  },
  CHANGE_LOG(state, payload) {
    state.userIsLoggedIn = payload;
  },
  REMOVE_EMAIL(state) {
    state.email = "";
  },
};

const actions = {
  addEmail(context, payload) {
    context.commit('ADD_EMAIL', payload);
  },
  addPassword(context, payload) {
    context.commit('ADD_PASSWORD', payload);
  },
  changeLog(context, payload) {
    context.commit('CHANGE_LOG', payload);
  },
  removeEmail(context, payload) {
    context.commit('REMOVE_EMAIL', payload);
  },
};

const getters = {
  getEmail(state) {
    return state.email;
  },
  getPassword(state) {
    return state.password;
  },
  getLog(state) {
    return state.userIsLoggedIn;
  },
};

const dataModule = {
  state,
  mutations,
  actions,
  getters
}

export default dataModule