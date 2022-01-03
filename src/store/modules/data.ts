const state = {
  email: ""
};
  
const mutations = {
  ADD_EMAIL(state, payload) {
    state.email = payload;
  }
};

const actions = {
  addEmail(context, payload) {
    context.commit('ADD_EMAIL', payload);
  }
};

const getters = {
  getEmail(state) {
    return state.email;
  }
};

const dataModule = {
  state,
  mutations,
  actions,
  getters
}

export default dataModule