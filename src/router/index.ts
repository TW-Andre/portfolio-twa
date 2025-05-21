/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto';
import {routes} from "vue-router/auto-routes";
import {myRoutes} from "@/router/routes";
import {setupLayouts} from "layouts-generated";
import {userStore} from "@/stores/authStore";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(myRoutes)
})

const title = "André dos Santos";

router.beforeEach((to, from, next) => {

  const auth = userStore();
  const isRequiredAuth = to.meta.requiresAuth;

  const nearestWithTitle = to.matched
      .slice()
      .reverse()
      .find((r) => r.meta && r.meta.title);

  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title + " | " + title || title;
  }

  if (!isRequiredAuth && auth.user) {
    return { name: 'Home' };
  } else if (isRequiredAuth && !auth.user) {
    next({ name: 'Login' });
  } else {
    next();
  }

})

// Workaround for https://github.com/vitejs/vite/issues/11804
/*router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dyamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})*/

export default router
