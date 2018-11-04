import vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router';
vue.use(BootstrapVue);
new vue({
    router,
}).$mount('#badmintoninfo');
