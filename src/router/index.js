import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home/Home';
import Footer from '@/components/Common/Footer/Footer';

Vue.use(Router);

/*eslint-disable */
const Resume = (resolve) => {
  require.ensure(['@/components/Resume/Resume'], () => {
    resolve(require('@/components/Resume/Resume'));
  });
};

const Lab = (resolve) => {
  require.ensure(['@/components/Lab/Lab'], () => {
    resolve(require('@/components/Lab/Lab'));
  });
};
/*eslint-enable */

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
      components: {
        default: Resume,
        footer: Footer,
      },
    },
    {
      path: '/lab',
      name: 'lab',
      components: {
        default: Lab,
        footer: Footer,
      },
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
