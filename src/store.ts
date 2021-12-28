import { createStore } from 'vuex'

const state = {
  email: [],
};

const mutations = {
  ADD_EMAIL(state, payload) {
    const newEmail = payload;
    state.email.push(newEmail);
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

const store = createStore({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
});

export default createStore({

});