import text from './greeting.txt';
class DemoController {
    constructor($window, $location){
        this.greetingMessage = "Hello World";
        this.text =  text;
        this.show = false;
        this.$location = $location;
        this.$window =  $window;
        this.doRedirection();
    }
    doRedirection(){
        let name = this.$location.search().name;
        if(name !== 'admin'){
            this.$location.path("/unathorized");
        }
    }
    handleClick(){
        console.log("Button Clicked");
        this.$location.path('/login');
    }
}
DemoController.$inject = ['$window','$location'];

export default DemoController;