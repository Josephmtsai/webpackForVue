import vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import menuheader from './components/menuheader.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

vue.use(BootstrapVue);
new vue({
    el: '#badmintoninfo',
    template: '<menuheader/>',
    components: {
        menuheader,
    },
});
