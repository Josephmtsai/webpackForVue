import TreeView from 'vue-json-tree-view';
export default {
    components: {
        TreeView,
    },
    data() {
        return {
            apiUrl: 'http://qatbadmap.herokuapp.com/api/locationinfolist',
            jsonSource: {
                maxDepth: 4,
                rootObjectKey: 'root',
                modifiable: false,
            },
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
