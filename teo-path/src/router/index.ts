import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import App from "@/App.vue";
import ServicesView from "@/views/ServicesView.vue";
import BabyCounselingView from '../views/BabyCounselingView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: App,
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesView,
  },
  {
    path: '/babyCounseling',
    name: 'BabyCounseling',
    component: BabyCounselingView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

export default router;