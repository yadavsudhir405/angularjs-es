import text from './greeting.txt';
class DemoController {
    constructor($window, $location){
        this.greetingMessage = "Hello World";
        this.text =  text;
        this.show = false;
        this.$location = $location;
        this.$window =  $window;
    }
    handleClick(){
        console.log("Button Clicked");
        this.$location.path('/login');
    }
}
DemoController.$inject = ['$window','$location'];

export default DemoController;