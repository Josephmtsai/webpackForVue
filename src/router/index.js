import Vue from 'vue';
import VueRouter from 'vue-router';
import GalleryContents from '../components/gallerycontents.vue';
Vue.use(VueRouter);
export default new VueRouter({
    mode: 'history',
    hash: false,
    routes: [
        { path: '/', component: GalleryContents },
    ],
});
