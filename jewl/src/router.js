import Vue from 'vue';
import Router from 'vue-router';

import HomePage from './App.vue';
import AboutPage from './AboutPage.vue';
import WorksPage from './WorksPage.vue';
import ContactPage from './ContactPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/works',
      name: 'works',
      component: WorksPage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
    },
  ],
});
