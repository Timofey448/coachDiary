const state = {
  students: [],
}

const mutations = {
  ADD_STUDENT(state, payload) {
    state.students = payload;
  }
}

const actions = {
  addStudent(context, payload) {
    context.commit("ADD_STUDENT", payload);
  }
}

const getters = {

}

const dataModule = {
  state,
  mutations,
  actions,
  getters,
}

export default dataModule