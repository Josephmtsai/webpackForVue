import Vue from 'vue';
import VueRouter from 'vue-router';
import ImageContents from '../components/imagecontents.vue';

Vue.use(VueRouter);
export default new VueRouter({
    mode: 'history',
    hash: false,
    routes: [
        { path: '/', component: ImageContents },
    ],
});
