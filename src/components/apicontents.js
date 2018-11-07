import TreeView from 'vue-json-tree-view';

export default {
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
            alert(ex);
        
}
    
},
    methods: {
        getJsonData() {
            try {
                fetch(this.apiUrl).then(response => response.json())
                    .then((data) => {
                        this.jsonSource = data;
                    });

            } catch (ex) {
                alert(ex);
            
}

        },
    },
};
