import gogo from '../images/gogo.png';
import gogo2 from '../images/gogo2.png';

export default {
    props: ['selectIndex'],
    data() {

        return {
            imageSrcs: [gogo, gogo2],
        };
    
},
    methods: {
        getImageURL() {

            return this.imageSrcs[this.selectIndex];
        
},
    },
};
