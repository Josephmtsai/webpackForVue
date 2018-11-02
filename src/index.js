import vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import contents from './components/contents.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

vue.use(BootstrapVue);
new vue({
    el: '#badmintoninfo',
    template: '<contents/>',
    components: {
        contents,
    },
});
