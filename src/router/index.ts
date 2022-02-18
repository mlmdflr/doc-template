import { createRouter, createWebHashHistory } from 'vue-router';
import menuOption from "@/cfg/menuOption";

const Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Main',
      redirect: '/' + menuOption[0].key
    },
    {
      path: '/:key',
      name: 'Mains',
      component: () => import('@/views/home/index.vue')
    }
  ]
});

export default Router;