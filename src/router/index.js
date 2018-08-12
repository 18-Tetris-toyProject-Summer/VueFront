import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';
import RoomList from '@/components/RoomList';
import Agreement from '@/components/Agreement';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/agreement',
      name: Agreement,
      component: Agreement
    },
    {
      path: '/roomlist',
      name: 'RoomList',
      component: RoomList
    }
  ]
});
