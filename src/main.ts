/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue';
// Plugins
import { registerPlugins } from '@/plugins';
// Composables
import { createApp } from 'vue';
import { createPinia } from "pinia";
// Swal Alerts
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const pinia = createPinia();

const app = createApp(App);

registerPlugins(app);

app.use(pinia);
app.use(VueSweetalert2);
app.mount('#app');
