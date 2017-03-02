import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home/Home';
import Resume from '@/components/Resume/Resume';
import Lab from '@/components/Lab/Lab';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume,
    },
    {
      path: '/lab',
      name: 'lab',
      component: Lab,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
