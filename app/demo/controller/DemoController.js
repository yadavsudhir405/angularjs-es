import text from './greeting.txt';
import img1 from '../../assets/images/webpack-es6.png';

class DemoController {
    constructor($window, $location) {
        this.greetingMessage = "Hello World";
        this.text = text;
        this.show = false;
        this.$location = $location;
        this.$window = $window;
        this.doRedirection();
        this.img = img1;
        this.speakersCount = [{
            name: "Jerr Jack",
            img: img1,
            month: "January"
        },
            {
                name: "Fog Joe",
                img: img1,
                month: "October"
            },
            {
                name: "Frank Lee",
                img: img1,
                month: "December"
            }
        ]
    }

    doRedirection() {
        let name = this.$location.search().name;
        /*if(name !== 'admin'){
            this.$location.path("/unathorized");
        }*/
    }

    handleClick() {
        console.log("Button Clicked");
        this.$location.path('/login');
    }
}

DemoController.$inject = ['$window', '$location'];

export default DemoController;