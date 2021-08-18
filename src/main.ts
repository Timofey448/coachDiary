import {createApp} from 'vue'
import App from './app.vue'
import {router} from './routes'
import './index.css';

const app = createApp(App);
app.use(router)
app.mount('#app')
