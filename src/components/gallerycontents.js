import VueGallerySlideshow from 'vue-gallery-slideshow';
import ImageModal from './modal/image_modal.vue';
import gogo from '../images/gogo.png';
import gogo2 from '../images/gogo2.jpg';
import jinx from '../images/jinx.jpg';
import kobato from '../images/kobato.jpg';
import lux from '../images/lux.jpg';
import miku from '../images/miku.jpg';
export default {
    components: {
        ImageModal,
        VueGallerySlideshow,
    },
    data() {
        return {
            index: null,
            images: [gogo, gogo2, miku, lux, kobato, jinx],
        };
    },
    methods: {
        showModal() {
            this.index += 1;
            this.index %= 2;
            this.$refs.modal.show();
        },
        hideModal() {
            this.$refs.modal.hide();
        },
    },
};

