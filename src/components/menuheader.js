export default {
    data() {

        return {
            headerValue: ['first', 'second', 'third'],
            greeting: 'hello',
        };
    
},
    methods: {
        showModal() {

            this.$refs.myModalRef.show();
        
},
        hideModal() {

            this.$refs.myModalRef.hide();
        
},
    },
};
