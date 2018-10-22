import vue from 'vue';
import menuheader from './components/menuheader.vue';

new vue({
  el: '#badmintoninfo',
  template: '<menuheader/>',
  components: {
    menuheader
  }
});
