export default {
    data() {
        return {
            apiUrl: 'http://qatbadmap.herokuapp.com/api/locationinfolist',
            jsonSource: {},
        };
    },
    async created() {
        this.getApiResult();
    },
    methods: {
        getApiResult() {
            try {
                fetch(this.apiUrl).then(response => response.json())
                    .then((data) => {
                        this.jsonSource = data;
                    });
            } catch (ex) {
                console.log(ex);
            }
        },
    },
};
