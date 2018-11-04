import menuheader from './menuheader.vue';
import ImageModal from './modal/image_modal.vue';
export default {
    components: {
        menuheader,
        ImageModal,
    },
    data() {
        return {
            index: 0,
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

