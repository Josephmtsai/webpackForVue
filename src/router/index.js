import Vue from 'vue';
import VueRouter from 'vue-router';
import Content from '../components/contents.vue';
Vue.use(VueRouter);
export default new VueRouter({
    mode: 'history',
    hash: false,
    routes: [
        { path: '/contents/:parameters?', component: Content },
        { path: '/', component: Content },
    ],
});
