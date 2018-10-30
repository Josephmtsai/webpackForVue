import ImageModal from './modal/image_modal.vue';

export default {
    components: {
        ImageModal,
    },
    data() {

        return {
            headerValue: ['first', 'second', 'third'],
            greeting: 'hello',
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
