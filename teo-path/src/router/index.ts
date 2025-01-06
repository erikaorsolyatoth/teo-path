import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
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


// import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
//
// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about/aboutMe',
//     name: 'aboutMe',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "aboutMe" */ '../views/about/AboutMeView.vue')
//   },
//   {
//     path: '/about/studies',
//     name: 'studies',
//     component: () => import(/* webpackChunkName: "studies" */ '../views/about/StudiesView.vue')
//   },
//   {
//     path: '/about/experiences',
//     name: 'experiences',
//     component: () => import(/* webpackChunkName: "experiences" */ '../views/about/ExperiencesView.vue')
//   },
//   {
//     path: '/issues',
//     name: 'issues',
//     component: () => import(/* webpackChunkName: "issues" */ '../views/IssuesView.vue')
//   },
//   {
//     path: '/newsEvents',
//     name: 'newsEvents',
//     component: () => import(/* webpackChunkName: "newsEvents" */ '../views/NewsEventsView.vue')
//   },
//   {
//     path: '/services',
//     name: 'services',
//     component: () => import(/* webpackChunkName: "services" */ '../views/ServicesView.vue')
//   },
//   {
//     path: '/contacts',
//     name: 'contacts',
//     component: () => import(/* webpackChunkName: "contacts" */ '../views/ContactsView.vue')
//   }
// ]
//
// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// })
//
// export default router
