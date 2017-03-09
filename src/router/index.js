import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home/Home';
import Nav from '@/components/Common/Nav/Nav';
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

const Typer = (resolve) => {
  require.ensure(['@/components/Typer/Typer'], () => {
    resolve(require('@/components/Typer/Typer'));
  });
};
/*eslint-enable */

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        header: Nav,
        default: Home,
      },
    },
    {
      path: '/resume',
      name: 'resume',
      components: {
        header: Nav,
        default: Resume,
        footer: Footer,
      },
    },
    {
      path: '/lab',
      name: 'lab',
      components: {
        header: Nav,
        default: Lab,
        footer: Footer,
      },
    },
    {
      path: '/typer',
      name: 'typer',
      components: {
        default: Typer,
      },
    },
    {
      path: '*',
      redirect: '/typer',
    },
  ],
});
