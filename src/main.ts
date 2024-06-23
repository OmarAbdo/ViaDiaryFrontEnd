import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './style.css'
import router from './router' 
import store from './store'

createApp(App)
    .use(router) // Use router
    .use(store) // Use store
    .mount('#app')