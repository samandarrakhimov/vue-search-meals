import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import uiCompanents from './ui-companents'
import * as filters from './filters'

const app = createApp(App)

app.use(router)
app.use(store)
uiCompanents.map(companent => app.component(companent.name, companent))
app.mount('#app')
app.config.globalProperties.$filters = filters
