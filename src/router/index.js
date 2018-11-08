import Vue from 'vue';
import VueRouter from 'vue-router';
import GalleryContents from '../components/gallerycontents.vue';
import ApiSource from '../components/apicontents.vue';
Vue.use(VueRouter);
export default new VueRouter({
    mode: 'history',
    hash: false,
    routes: [
        { path: '/', component: GalleryContents },
        { path: '/apisource', component: ApiSource },
    ],
});
