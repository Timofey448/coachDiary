import {createApp} from 'vue'
import App from './app.vue'
import {router} from './routes'
import './index.css'
import store from './store/store'

const app = createApp(App);
app.use(router)
app.use(store)
app.mount('#app')