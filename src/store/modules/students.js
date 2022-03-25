const state = {
  students: [],
}

const mutations = {
  add_student(state, payload) {
    state.students = payload;
  }
}

const actions = {
  addStudent(context, payload) {
    context.commit("add_student", payload);
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
