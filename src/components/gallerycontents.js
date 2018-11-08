import VueGallerySlideshow from 'vue-gallery-slideshow';
import ImageModal from './modal/image_modal.vue';
import gogo from '../images/gogo.png';
import gogo2 from '../images/gogo2.jpg';
import jinx from '../images/jinx.jpg';
import kobato from '../images/kobato.jpg';
import lux from '../images/lux.jpg';
import miku from '../images/miku.jpg';
import kanahei from '../images/kanahei.jpg';
import kanahei2 from '../images/kanahei2.jpg';
import kanahei3 from '../images/kanahei3.jpg';
import pic from '../images/pic.jpg';
export default {
    components: {
        ImageModal,
        VueGallerySlideshow,
    },
    data() {
        return {
            index: null,
            images: [gogo, gogo2, miku, lux, kobato, jinx, kanahei, kanahei2, kanahei3, pic],
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

