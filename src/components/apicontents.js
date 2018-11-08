import TreeView from 'vue-json-tree-view';

export default {
    components: {
        TreeView,
    },
    data() {
        return {
            apiUrl: '',
            jsonSource: '[]',
        };
    
},
    async created() {

        try {
            fetch(this.apiUrl).then(response => response.json())
                .then((data) => {
                    this.jsonSource = data;

                });
        } catch (ex) {
            console.log(ex);

        }

    },
};
