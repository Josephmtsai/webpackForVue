import vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import TreeView from 'vue-json-tree-view';
import router from './router';
import contents from './components/contents.vue';
vue.use(TreeView);
vue.use(BootstrapVue);
new vue({
    router,
    template: '<contents/>',
    el: '#badmintoninfo',
    components: { contents },
});
