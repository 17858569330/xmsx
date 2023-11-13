
import { createRouter, createWebHashHistory } from 'vue-router'
import { BeforeEachOfRouter } from '@farris/mobile-vue-adapter'

import MyOrderComponent from "../apps/myorder/index.vue";
import { routerConfig as MyOrderChildRouterConfig } from "../apps/myorder/router/index";

const asyncRoutes = [
    {
        path: '/MyOrder',
        name: 'MyOrder',
        component: MyOrderComponent,
        meta: {},
        children: MyOrderChildRouterConfig
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes:asyncRoutes,
})

BeforeEachOfRouter && router.beforeEach(BeforeEachOfRouter)

export default router
