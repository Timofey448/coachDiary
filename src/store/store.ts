import { createStore } from 'vuex';
import auth from './modules/auth';
import students from './modules/students';

export default createStore({
  modules: {
    auth,
    students
  }
});
