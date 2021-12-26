import {createApp} from 'vue'
import App from './app.vue'
import {router} from './routes'
import './index.css'
import {createStore} from 'vuex'

const store = createStore({
  state() {
    return {
    }
  },
  mutations: {

  }
})

const app = createApp(App);
app.use(router)
app.use(store)
app.mount('#app')