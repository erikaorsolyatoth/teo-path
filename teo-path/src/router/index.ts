import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import App from "@/App.vue";
import ServicesView from "@/views/ServicesView.vue";
// Not used
// import BabyCounselingView from '../views/BabyCounselingView.vue'

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
  // Not used
  // {
  //   path: '/babyCounseling',
  //   name: 'BabyCounseling',
  //   component: BabyCounselingView,
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const element = document.querySelector(to.hash);
          if (element) {
            // const offset = 40; // A navbar magassága (állítsd be megfelelően)
            // const top = element.getBoundingClientRect().top + window.scrollY - offset;
            const top = element.getBoundingClientRect().top + window.scrollY;
            resolve({ left: 0, top, behavior: "smooth" });
          } else {
            resolve({ left: 0, top: 0 });
          }
        }, 100); // Kis késleltetés, hogy biztosan betöltődjön a tartalom
      });
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

export default router;