import $ from "jquery";
class LoginController {
    constructor(constantService){
        this.message = "Login Page edited";
        this.constant = constantService.getConstant();
    }
    handleClick() {
        console.log("Clicked");
        $("button.btn-primary").addClass("myclass");
    }

}
LoginController.$inject = ['ConstantService'];
export default LoginController;