import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';

const app = createApp(App)
app.config.isCustomElementTag = (tag) => tag.startsWith('my-');
app.mount('#app');
