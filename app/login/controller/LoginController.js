import $ from "jquery";
import edsherran from "../../assets/images/login/edsheeran.png"
class LoginController {
    constructor(constantService){
        this.message = "Login Page edited";
        this.constant = constantService.getConstant();
        this.imageUrl = edsherran;
    }
    handleClick() {
        console.log("Clicked");
        $("button.btn-primary").addClass("myclass");
    }

}
LoginController.$inject = ['ConstantService'];
export default LoginController;