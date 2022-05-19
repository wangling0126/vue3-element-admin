import { createApp } from 'vue'
import { router } from "./router";
import './styles/index.less'
import App from './App.vue'
const app = createApp(App)
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(ElementPlus)
app.use(router)
app.mount('#app')

